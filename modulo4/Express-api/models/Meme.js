const mongoose = require('mongoose');
const { Schema } = mongoose;

const memeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    urlImage: {
        type: String,
        required: true,
        trim: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Meme', memeSchema);
