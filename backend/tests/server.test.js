const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");
const Event = require("../models/event.model");

beforeEach(done => {
    mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true }, () => done());
});

afterEach(done => {
    mongoose.connection.db.dropCollection(() => {
        mongoose.connection.close(() => done());
    });
});

test("GET data from /", async () => {
    const post = await Event.create({
        firstName: "Mike",
        lastName: "Jones",
        email: "mjones@gmail.com",
        date: "11/11/11",
    });

    await supertest(app)
        .get("http://localhost:5000/users/")
        .expect(200)
        .then(response => {
            expect(Array.isArray(response.body)).toBeTruthy();
            expect(response.body.length).toEqual(1);
        });
});
