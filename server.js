import express from "express"
import * as dotenv from 'dotenv'
import {userRouter, productRouter} from './routes/index.js'
import connectDB from "./database/database.js"
// Khai báo 1 middleware
import checkToken from "./auth/authentication.js"

dotenv.config()
const app = express()
app.use(express.json()) // Config cho express lam viec voi du lieu theo dinh dang json
// Thiết 1 middleware để kiểm soát mọi request đi đến express server
app.use(checkToken)

// Routes: Root Router
app.get('/', (req, res)=>{
    res.send("Welcome to Home RESTful API")
})

// Routes:
app.use('/users', userRouter)
app.use('/products', productRouter)

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    connectDB()
    console.log(`Server is running on port ${port}`);
})