require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {ObjectId} = require('mongodb');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        //We send an object instead of an array so we can customize output more
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    // Validate id using isValid
    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch(e => res.status(400).send());

});

app.delete('/todos/:id', (req, res) => {
    //Get id
    var id = req.params.id;
    //Validate the id -> return 404
    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    }
    //remove todo by id
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.status(200).send({todo});
    }).catch(e => res.status(400).send());

});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectId.isValid(id)) {
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch(e => res.status(400).send());
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};

//C:\Program Files\MongoDB\Server\4.0\bin>mongod.exe --dbpath /Users/sagar/mongo-data