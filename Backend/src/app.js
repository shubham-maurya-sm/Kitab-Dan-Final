import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import path from "path"
dotenv.config({
    path: './.env'
})
const app = express()

const __dirname = path.resolve();
app.use(cors({
  origin: process.env.frontend_url,
  methods: ["POST",'GET'],
  credentials:true,
  allowedHeaders: ["Content-Type", "Authorization"]
})); 
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(cookieParser())



//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register

export { app }