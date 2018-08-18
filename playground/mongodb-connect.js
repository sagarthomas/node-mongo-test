const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('todos').insertOne({
    //     title: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Jon Snow',
    //     age: 28,
    //     location: 'Winterfell'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user to MongoDB server', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});

