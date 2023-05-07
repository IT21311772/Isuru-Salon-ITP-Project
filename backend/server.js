// Import packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

// Use the middlewares to get the data to backend
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


// Import the routes
const userRoutes = require('./routes/userRoutes');
const packageRoutes = require('./routes/packageRoutes');
const financeRoutes = require('./routes/financeRoutes');

// Routes
app.use("/api/users", userRoutes);
app.use("/api/Post", packageRoutes);
app.use("/api/Fin", financeRoutes);

// Connect the database
mongoose
    .connect("mongodb+srv://rishen:rishen123@cluster0.m6wwag4.mongodb.net/?retryWrites=true&w=majority")
    .catch((err) => console.log(err));

    // router.get("/", (req, res) => {
    //     res.send("Express is here");
    // });



// Check the Server
app.listen(3001, function () {
    console.log("Server is running");
});

app.listen(8000, function() {
    console.log("Port connected");
});