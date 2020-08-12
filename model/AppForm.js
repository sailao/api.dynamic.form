var {Schema, model} = require('mongoose');

var formSchema = new Schema({ }, {strict: false});

module.exports =  model('AppForm', formSchema); 