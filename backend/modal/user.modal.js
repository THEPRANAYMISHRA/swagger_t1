const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:String,
    pass:String,
    name:String,
    age:Number
})

const UserModal=mongoose.model("account",userSchema)

module.exports=UserModal