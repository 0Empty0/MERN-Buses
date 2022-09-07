import { Schema, model } from 'mongoose'

interface IReview {}

const ReviewSchema = new Schema<IReview>(
	{
		author: { type: Schema.Types.ObjectId, ref: 'User' },
		rate: { type: Number, required: true },
		title: { type: String, required: true },
		text: { type: String, required: true },
		date: { type: Date, required: true },
	},
	{ timestamps: true }
)

export default model('Review', ReviewSchema)
