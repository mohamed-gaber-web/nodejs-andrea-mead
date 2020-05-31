const mongoose = require('mongoose'); // mongoose library

const Task = mongoose.model('Task', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    completed: {
        type: Boolean,
        default: false // if not enter value === value === default
    }
});


module.exports = Task;