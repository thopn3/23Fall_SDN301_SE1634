import express from 'express'
import { body, validationResult } from 'express-validator'

const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    res.send("Get all users")
})

userRouter.get('/:id', async (req, res) => {
    res.send("Get users by user Id")
})

userRouter.post('/register', async (req, res) => {
    res.send("Registratin a new User")
})

userRouter.post('/login',
    body("email").isEmail(),
    body("password").isLength({min:5})
    , async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        res.send('Login successfully')
    })

    
userRouter.put('/edit', async (req, res) => {
    res.send("Edit an User")
})

export default userRouter