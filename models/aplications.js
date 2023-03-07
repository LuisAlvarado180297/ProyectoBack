const {Schema,model} = require('mongoose');

const esquema = new Schema({
    name: String, 
    created_at: Date,
    updated_at: Date,
});

module.exports = model('aplications', esquema);

