import express from "express"
import * as dotenv from 'dotenv'
import {userRouter, productRouter} from './routes/index.js'

// import { connect } from "mongoose"
// import Product from "./models/productModel.js"

dotenv.config()
const app = express()
app.use(express.json()) // Config cho express lam viec voi du lieu theo dinh dang json

// Routes: GET, POST, PUT (PATCH), DELETE
app.get('/', (req, res)=>{
    res.send("Welcome to Home RESTful API")
})

app.use('/users', userRouter)
app.use('/products', productRouter)

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

// app.post("/products", async (req, res)=>{
//     try {
//         const product = await  Product.create(req.body)
//         if(!product){
//             res.status(500).json({message: 'Cannot create product'})
//         }
//         res.status(200).json(product)
//     } catch (error) {
//         console.log(error.message);
//     }
// })

// Connect to MongoDB
// connect("mongodb+srv://admin:123456Admin@apitraining.cwlsp4i.mongodb.net/?retryWrites=true&w=majority")
//     .then(()=>{
//         console.log("Connect to MongoDB sucessfully")
//         // Listen on port number: 9999
//         app.listen(9999, ()=>{
//             console.log('Server is running on port 9999')
//         })
//     }).catch((err)=>{
//         console.log(err.message);
//     })