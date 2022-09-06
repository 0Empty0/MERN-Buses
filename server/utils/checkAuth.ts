import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

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
			// const decoded: JwtPayload | string =
			jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
				req.userId = decoded
			})

			// if (typeof decoded !== 'string') {
			// 	req.userId = decoded.id
			// } else {
			// 	throw new Error('')
			// }

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
