const express = require('express')
const router = express.Router();
const emp = require('../models/employeeModel');

// Create API route for Create method in CRUD Operations
router.post("/add", async (req, res) => {

                emp.create({
                    name: req.body.name,
                    id: req.body.id,
                    NIC: req.body.NIC,
                    joinedDate: req.body.joinedDate,
                    position: req.body.position,
                    address: req.body.address,
                    phoneNo: req.body.phoneNo
                })
                    .then((doc) => console.log(doc))
                    .catch((err) => console.log(err));
});

router.post("/verify", async (req, res) => {
    const {id} = req.body;
    let employee = await emp.findOne({ id:id });
    if (employee) {
      return res.status(400).json({ error: "User already exists" });
    }
    else{
        return res.status(200).json({ message: "New User" });
    }
})
        

// Create API route for Read method in CRUD Operations
router.get("/emps", (req, res) => {
    emp.find()
        .then((items) => res.json(items))
        .catch((err) => console.log(err));
});


// Create API route for Delete method in CRUD Operations
router.delete("/delete/:id", (req, res) => {
    //create route for delete
    emp.findByIdAndDelete({ _id: req.params.id })
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });

// Create API route for Update method in CRUD Operations
router.put("/update/:id", (req, res) => {
    emp.findByIdAndUpdate (
        { _id: req.params.id},
        {
            name: req.body.name,
            id: req.body.id,
            NIC: req.body.NIC,
            joinedDate: req.body.joinedDate,
            position: req.body.position,
            address: req.body.address,
            phoneNo: req.body.phoneNo,
        }
    )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
        
});

module.exports = router;