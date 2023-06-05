const mongoose = require("mongoose");
const UserDetailsSchema=new mongoose.Schema(
    {
        fname:String,
        lname:String,
        date:String,
        email:String,
        pass:String,
    },
    {
        collection:"user",
    }
)
mongoose.model("user",UserDetailsSchema);