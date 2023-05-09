const mongoose = require('mongoose')

// DB SHCEMA AND MODEL
const serviceSchema = mongoose.Schema(
    {
        sId: {
            type:String,
            required:true,
        },
        sName: {
            type:String,
            required:true,
        },
        sPrice: {
            type:String,
            required:true,
        },
        sCategory: {
            type:String,
            required:true,
        }, 
         
    },
    
    {
        timestamps: true,
    }

);

module.exports = mongoose.model("Services", serviceSchema);
