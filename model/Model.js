var {Schema, model} = require('mongoose');

var modelSchema = new Schema({
    form: {type: Mongoose.Schema.Types.ObjectId, ref: 'AppForm'},
    schema: {}
});

module.exports =  model('Model', modelSchema); 