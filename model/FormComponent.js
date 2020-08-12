var mongoose, {Schema, model} = require('mongoose');

var componentSchema = new Schema({ 
    title: String,
    componentComponents: [{
        type: Schema.Types.String, 
        ref: 'formComponent' 
    }]
}, {strict: false});

module.exports =  model('FormComponent', componentSchema); 