const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/route");

app.use(express.json());
app.use('/', routes);

mongoose.connect("mongodb://localhost:27017/Employee")
    .then(() => {
        console.log("DB connected");
    })
    .catch((error) => {
        console.error("DB connection error:", error);
    });


app.listen(3015, () => {
    console.log("Server running on port 3015");
});
