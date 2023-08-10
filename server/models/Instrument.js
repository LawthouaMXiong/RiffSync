const { Schema, model } = require('mongoose');

const instrumentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    
});

const Instrument = model('Thought', instrumentSchema);

module.exports = Instrument;
