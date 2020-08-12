var {Schema, model} = require('mongoose');

var formSchema = new Schema({ }, {strict: false});

module.exports =  model('appForms', formSchema); 