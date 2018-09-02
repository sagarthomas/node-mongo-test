const mongoose = require('mongoose');
const API = require('./../../secrets');

mongoose.Promise = global.Promise; //Sets the type of promises mongoose uses to built in one
mongoose.connect('mongodb://localhost:27017/TodoApp' || API.MONGODB_URI );

module.exports = {mongoose};