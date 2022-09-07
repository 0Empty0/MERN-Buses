import { Schema, model } from 'mongoose'

interface IOrder {
	author: Schema.Types.ObjectId
	fullName: string
	phone: string
	departureDate: Date
	arrivalTime: Date
	seat: number
	specialRequest: string
}

const OrderSchema = new Schema<IOrder>({
	author: { type: Schema.Types.ObjectId, ref: 'User' },
	fullName: { type: String, required: true },
	phone: { type: String, required: true },
	departureDate: { type: Date, required: true },
	arrivalTime: { type: Date, required: true },
	seat: { type: Number, required: true },
	specialRequest: { type: String, required: true },
})

export default model<IOrder>('Order', OrderSchema)
