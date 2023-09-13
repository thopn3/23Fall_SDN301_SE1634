import { body, validationResult } from "express-validator"
import { userRepository } from "../repositories/index.js"

const getAllUsers = async (req, res) => {

}

const getUserById = async (req, res) => {

}

const login = async (req, res) => {
    // Validation done
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const {email, password} = req.body
    // Call Repository: User
    userRepository.login({email, password})
    res.status(200).json({message: 'Login successfully.'})
}

const register = async (req, res) => {

}

export default {
    getAllUsers,
    getUserById,
    login,
    register
}
