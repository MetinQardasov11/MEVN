import mongoose from "mongoose";
import User from "../models/user.js"
import { checkValidationErrors } from "../utils/index.js";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
    try {
        const { email } = req.body;
        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            return res.status(400).json({
                error: 'Email already exists'
            })
        }

        const newUser = await User.create(req.body);
        newUser.password = undefined
        return res.status(201).json({
            message: 'User created successfully',
            user: newUser
        })
    } catch (error) {
        if (error.name === 'ValidationError') {
            if (checkValidationErrors(error, res)) return
        } else {
            console.log('Erroring creating user', error)
            return res.status(500).json({
                error: 'Internal server error'
            })
        }
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            })
        }
        
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return res.status(401).json({
                error: 'Invalid password'
            })
        }
        user.password = undefined
        return res.status(200).json({
            message: 'User logged in successfully',
            user
        })
    } catch (error) {
        console.log('Erroring login user', error)
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

export { register, login }