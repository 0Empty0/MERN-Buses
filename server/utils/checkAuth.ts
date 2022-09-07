import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface UserRequest extends Request {
	userId?: any
}

export const checkAuth = (
	req: UserRequest,
	res: Response,
	next: NextFunction
) => {
	const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

	if (token) {
		try {
			jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
				if (typeof decoded !== 'string') {
					req.userId = decoded?.id
				} else {
					throw new Error('')
				}
			})

			next()
		} catch (error) {
			return res.json({
				message: 'Invalid token',
			})
		}
	} else {
		return res.json({
			message: 'Invalid token',
		})
	}
}
