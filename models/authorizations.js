const {Schema, model} = require('mongoose');

const esquema = new Schema({
    application_id: ObjectID, 
    token: String,
    created_at: Date,
    updated_at: Date
});

module.exports = model('authorizations', esquema);