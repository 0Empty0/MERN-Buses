import { Schema, model } from 'mongoose'

interface IUser {
	username: string
	password: string
	agencies: Schema.Types.ObjectId[]
}

const UserSchema = new Schema<IUser>({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	agencies: [{ type: Schema.Types.ObjectId, ref: 'Agency' }],
})

export default model<IUser>('User', UserSchema)
