import express from "express";

import connectDB from "./src/db/Db.js";

import { app } from "./src/app.js";

const port=process.env.PORT || 3000


connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`⚙️ Server is running at port : ${port}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

app.get("/",(req,res)=>{
    res.send("HELLO THIS IS SHUBHAM MAURYA ")
   
    
})


//grant vismo &n teninit
//incenption ,intesteller
