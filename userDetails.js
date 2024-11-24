const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
    {
        uname:String,
        email:String,
        mobile:String,
    },
    {
        collection:"UserInfo",
    }
);

mongoose.model("UserInfo",UserDetailsScehma)