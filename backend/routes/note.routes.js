const express=require("express")
const noteRouter=express.Router()
const NoteModal=require("../modal/note.modal")


noteRouter.get("/",async(req,res)=>{
    try {
        const notes=await NoteModal.find()
        res.send(notes)
    } catch (error) {
        res.send({"msg":"something went wrong"})
    }
})
noteRouter.post("/addnote",async(req,res)=>{
    let noteData=req.body
    try {
        const note=new NoteModal(noteData)
        await note.save()
        res.send({"msg":"note added"})
    } catch (error) {
        res.status(404).send({"msg":"error"})
    }
})
noteRouter.patch("/updatenote/",(req,res)=>{
    
})

module.exports=noteRouter