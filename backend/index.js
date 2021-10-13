const mongoose = require("mongoose");
const app = require("./server");

const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});
