const mongoose=require("mongoose")

const noteSchema=mongoose.Schema({
    title:String,
    sub:String,
    body:String,
})

const NoteModal=mongoose.model("note",noteSchema)

module.exports=NoteModal