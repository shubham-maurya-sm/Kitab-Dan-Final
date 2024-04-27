import mongoose from "mongoose";

const connectDB= async ()=>{
    try{

        await mongoose.connect(`${process.env.DB_URL}`)
        .then(()=>{
            console.log ("connection successfull")
        })
        
    }catch(err){
        console.log("Database error while connecting", err)
    }
}
export default connectDB;