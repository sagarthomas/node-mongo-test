const {ObjectId} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectId();
const userTwoId = new ObjectId();

const users = [{
    _id: userOneId,
    email: 'robbstark@gmail.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString() 
    }]
}, {
    _id: userTwoId,
    email: 'eddardstark@gmail.com',
    password: 'userTwoPass'
}];


const todos = [
    {_id: new ObjectId(), text: 'First test todo'},
    {_id: new ObjectId(), text: 'Second test todo', completed: true, completedAt: 333 }
];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        // userOne and userTwo store promises
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        // Promise.all takes an array of promises and only resolves if all promises in array resolve
        // We return just the promise so we can chain .then outside
        return Promise.all([userOne, userTwo]);
    }).then(() => done());
}

module.exports = {todos, populateTodos, users, populateUsers};