import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'

import { createToken } from '../utils/jwtSign'
import User from '../models/User'

//Register
export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body

    const isUsed = await User.findOne({ username })

    if (isUsed) {
      return res.json({
        status: 'User already registered',
      })
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const newUser = await new User({
      username,
      password: hash,
    })

    const token = createToken(newUser)

    await newUser.save()

    return res.json({
      token,
      status: 'User registered successfully',
    })
  } catch (error) {
    console.error(error)

    return res.json({
      status: 'Something went wrong',
    })
  }
}

//Login
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username })

    if (!user) {
      return res.json({
        status: 'User is unavailable',
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
      return res.json({
        status: 'Password is incorrect',
      })
    }

    const token = createToken(user)

    res.json({
      token,
      user,
      status: 'User login successfully',
    })
  } catch (error) {
    return res.json({
      status: 'Something went wrong',
    })
  }
}

//Get User
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.userId)

    if (!user) {
      return res.json({
        status: 'User not found',
      })
    }

    const token = createToken(user)

    res.json({
      token,
      user,
    })
  } catch (error) {
    return res.json({
      status: "User didn't login",
    })
  }
}
