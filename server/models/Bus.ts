import { Schema, model } from 'mongoose'

interface IBus {
	author: Schema.Types.ObjectId
	title: string
	description: string
	price: number
	discount: number
	thumbnails: string[]

	from: string
	to: string
	stops: string[]

	seats: Schema.Types.Mixed

	schedule: string[][]

	reviews: Schema.Types.ObjectId[]
}

const BusSchema = new Schema<IBus>(
	{
		author: { type: Schema.Types.ObjectId, ref: 'Agency' },
		title: { type: String, required: true },
		description: { type: String, required: true },
		price: { type: Number, required: true },
		discount: { type: Number, default: 0 },
		thumbnails: [{ type: String, required: true }],

		from: { type: String, required: true },
		to: { type: String, required: true },
		stops: [{ type: String, default: '' }],

		seats: [{ type: Schema.Types.Mixed, required: true }],

		schedule: [[{ type: String }], [{ type: String }]],

		reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
	},
	{ timestamps: true }
)

export default model('Bus', BusSchema)
