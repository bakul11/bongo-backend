const mongoose = require('mongoose');

const bongoMediaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    thubnail: {
        type: String,
        default: '',
    },
    des: {
        type: String,
        default: '',
    },
    duration: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
    },
    videoID: {
        type: String,
        required: true,
    },
    heroName: {
        type: String,
        required: true,
    },
    heroPhoto: {
        type: String,
        default: '',
    },
    heroinName: {
        type: String,
        required: true,
    },
    heroinPhoto: {
        type: String,
        default: '',
    },
    directorName: {
        type: String,
        default: ''
    },
    directorPhoto: {
        type: String,
        default: '',
    },
    recent: {
        type: String,
        default: ''
    }
})

const bongoMediaDB = mongoose.model('movieall', bongoMediaSchema);

module.exports = bongoMediaDB;





