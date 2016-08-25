var mongoose = require('mongoose');

var Car = mongoose.Schema({
    motorista: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['IN','OUT'],
        required: true,
        default: 'IN'
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Car', Car);