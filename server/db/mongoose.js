const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //Sets the type of promises mongoose uses to built in one
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};