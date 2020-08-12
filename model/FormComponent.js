var mongoose, {Schema, model} = require('mongoose');

var componentSchema = new Schema({}, {strict: false});

module.exports =  model('FormComponent', componentSchema); 