const router = require("express").Router();
const Event = require("../models/event.model");

router.route("/").get((req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const date = req.body.date;

    const newEvent = new Event({
        firstName,
        lastName,
        email,
        date,
    });

    newEvent
        .save()
        .then(() => {
            res.json("Event added!");
        })
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
