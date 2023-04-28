const mongoose = require('mongoose')

// DB SHCEMA AND MODEL
const postSchema = mongoose.Schema(
    {
        sId: String,
        sName: String,
        sPrice: String,
        sCategory: String,
         
    },
    
    {
        timestamps: true,
    }

);

module.exports = mongoose.model("Services", postSchema);
