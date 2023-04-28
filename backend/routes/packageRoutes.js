const express = require('express');
const router = express.Router();
const Post = require('../models/packageModel');

// Create API route for Create method in CRUD Operations
router.post("/create", (req, res) => {
    Post.create({
    sId: req.body.sId,
    sName: req.body.sName,
    sPrice: req.body.sPrice,
    sCategory: req.body.sCategory,
    })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

// Create API route for Read method in CRUD Operations
router.get("/posts", (req, res) => {
    Post.find()
        .then((items) => res.json(items))
        .catch((err) => console.log(err));
});



// Create API route for Delete method in CRUD Operations
router.delete("/delete/:id", (req, res) => {
    //create route for delete
    Post.findByIdAndDelete({ _id: req.params.id })
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });

// Create API route for Update method in CRUD Operations
router.put("/update/:id", (req, res) => {
    Post.findByIdAndUpdate (
        { _id: req.params.id},
        {
        sId: req.body.sId,
        sName: req.body.sName,
        sPrice: req.body.sPrice,
        sCategory: req.body.sCategory,
        }
    )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
        
});

module.exports = router;