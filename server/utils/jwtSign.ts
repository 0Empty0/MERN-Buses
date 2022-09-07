import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'

export const createToken = (user: { _id: Types.ObjectId }) => {
	return jwt.sign(
		{
			id: user._id,
		},
		process.env.JWT_SECRET!,
		{ expiresIn: '7d' }
	)
}
