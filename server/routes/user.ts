import { Router } from 'express'

import { register, login, getUser } from '../controllers/user'
import { checkAuth } from '../utils/checkAuth'

const router = Router()

//Register
router.post('/register', register)

//Login
router.post('/login', login)

//Get User
router.get('/', checkAuth, getUser)

export default router
