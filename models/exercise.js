const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for excercise"
    },
    type: {
        type: String,
        trim: true,
        required: "Enter a type of exercise"
    },
    weight: {
        type: Number
    },
    sets:{
        type: Number
    },
    reps: {
        type: Number
    },
    duration: {
        type: Number
    },
    distance: {
        type: Number
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise