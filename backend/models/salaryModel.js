const mongoose = require('mongoose')

const salSchema = mongoose.Schema(
    {
        id:{
            type:String,
            required:true
        },
        workingDays:{
            type:Number,
            required:true
        },
        payRate:{
            type:Number,
            required:true
        },
        netSalary:{
            type:Number,
            required:true
        },
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model("Salary", salSchema);