import { Schema, model } from 'mongoose'

interface IAgency {
	author: Schema.Types.ObjectId
	title: string
	logo: string
	buses: Schema.Types.ObjectId[]
	orders: Schema.Types.ObjectId[]
}

const AgencySchema = new Schema<IAgency>({
	author: { type: Schema.Types.ObjectId, ref: 'User' },
	title: { type: String, required: true },
	logo: { type: String, required: true },
	buses: [{ type: Schema.Types.ObjectId, ref: 'Bus' }],
	orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
})

export default model<IAgency>('Agency', AgencySchema)
