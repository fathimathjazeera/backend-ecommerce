const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
const userRouter= require('./routes/routes')

//mongoose coonecting
mongoose.connect("mongodb://127.0.0.1:27017/newdatabase")
app.use(bodyParser.json())

app.use('/api',userRouter)
app.listen(5000,()=>{
    console.log("server started");
})

