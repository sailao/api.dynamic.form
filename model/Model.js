var {Schema, model} = require('mongoose');

var modelSchema = new Schema({
    form: {
        type: Schema.Types.ObjectId, 
        ref: 'AppForm',
        unique : true, 
        required : true
    },
    model: {
        type : String , 
        unique : true, 
        required : true, 
    },
    rawSchema: {}
});

module.exports =  model('Model', modelSchema); 