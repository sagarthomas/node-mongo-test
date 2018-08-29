const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b82f6a8836bf2850500f96d11';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id // Mongoose automatically converts string to Object ID
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id // Mongoose automatically converts string to Object ID
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e)); 

var id = '5b7ca7a2a279f3c707b1cd1a';

User.findById(id).then(user => {
    if(!user) {
        return console.log('User not found.');
    }
    console.log('User', user);
}).catch(e => console.log(e));