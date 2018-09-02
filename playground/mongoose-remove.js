const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// }); 

//This function will return the deleted item
//Todo.findOneAndRemove({})

Todo.findByIdAndRemove('5b860945b7c5870a0aac6020').then((todo) => {
    console.log(todo);
});