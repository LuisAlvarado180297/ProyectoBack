const {Schema, model} = require('mongoose');

const esquema  =  new Schema({
    application_id: ObjectID, 
    type: String('error', 'info', 'warning'),
    priority: String('lowest', 'low', 'medium', 'high', 'highest'),
    path: String,
    message: String,
    request: { data: Mixed },
    response: { data: Mixed },
    created_at: Date,
    updated_at: Date
})


module.exports = model('logs', esquema);