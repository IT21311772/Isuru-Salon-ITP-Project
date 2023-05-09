const mongoose = require('mongoose')

const attendenceSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        id:{
            type:String,
            required:true,
        },
        date:{
            type:String,
            required:true,
        },
        state:{
            type:String,
            required:true,
        },
    },
    {
        timestamps:true,
    }
);

module.exports = mongoose.model("Attendece", attendenceSchema);