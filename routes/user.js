import express from 'express'

const userRouter = express.Router()

// Activities -> User object
userRouter.get('/', async(req, res)=>{
    res.send("Get all users")
})

userRouter.get('/:id', async(req, res)=>{
    res.send("Get users by user Id")
})

userRouter.post('/create', async(req, res)=>{
    res.send("Create a new User")
})

export default userRouter