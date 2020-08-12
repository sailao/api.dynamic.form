var mongoose, {Schema, model} = require('mongoose');

var formSchema = new Schema({ 
    title: String,
    formComponents: [{
        type: Schema.Types.String, 
        ref: 'formComponent' 
    }]
}, {strict: false});

module.exports =  model('appForms', formSchema); 