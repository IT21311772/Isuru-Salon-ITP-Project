const express = require('express');
const router = express.Router();
const Att = require('../models/attendanceModel');

// Create API route for Create method in CRUD Operations
router.post("/add", (req, res) => {
    Att.create({
        name: req.body.name,
        id: req.body.id,
        date: req.body.date,
        state: req.body.state
    })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

// Create API route for Read method in CRUD Operations
router.get("/data", (req, res) => {
    Att.find()
        .then((items) => res.json(items))
        .catch((err) => console.log(err));
});



// Create API route for Delete method in CRUD Operations
router.delete("/delete/:id", (req, res) => {
    //create route for delete
    Att.findByIdAndDelete({ _id: req.params.id })
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });

// Create API route for Update method in CRUD Operations
router.put("/update/:id", (req, res) => {
    Att.findByIdAndUpdate (
        { _id: req.params.id},
        {
            name: req.body.name,
            id: req.body.id,
            date: req.body.date,
            state: req.body.state,
        }
    )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
        
});

module.exports = router;