const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Invalid email address"],
    },
    date: {
        type: Date,
        required: true,
    },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
