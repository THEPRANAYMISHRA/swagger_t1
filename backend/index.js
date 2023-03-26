const express=require("express")
const app=express()
const userRoutes=require("./routes/user.routes")
const noteRoutes=require("./routes/note.routes")
const authmid=require("./middleware/notes.middleware")
const connection=require("./db")
const jwt=require("jsonwebtoken")

app.use(express.json())
app.use("/account",userRoutes)
app.use(authmid)
app.use("/notes",noteRoutes)

app.get("/",(req,res)=>{
    res.send({"msg":"You are on the home page"})
})

app.listen(4500,async()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log("failed to connect to db")
        console.log(error)
    }

    console.log("server is running")
})