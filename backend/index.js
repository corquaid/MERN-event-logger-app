const mongoose = require("mongoose");
const app = require("./server");

const port = process.env.PORT || 5000;

const USER = process.env.MONGODB_USERNAME;
const PASSWORD = process.env.MONGODB_PASSWORD;
const CLUSTER = process.env.MONGODB_CLUSTER_NAME;
const DB = process.env.MONGODB_DB_NAME;

const ATLAS_URI = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.mongodb.net/${DB}?retryWrites=true&w=majority`;

mongoose.connect(ATLAS_URI, { useNewUrlParser: true }).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});
