const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please add the username"]
    },
    
    email: {
        type: String,
        required: [true, "Please add the user's Email"],
        unique:[true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Please choose a strong password"],
    },

},{
    timestamps: true,
})

module.exports=mongoose.model("User",userSchema);