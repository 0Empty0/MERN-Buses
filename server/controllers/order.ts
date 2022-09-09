import { Request, Response } from 'express'
import Agency from '../models/Agency'
import Order from '../models/Order'

//Create Order
export const createOrder = async (req: Request, res: Response) => {
	try {
		const {
			agencyId,
			fullName,
			phone,
			departureDate,
			arrivalTime,
			seat,
			specialRequest,
		} = req.body

		const newOrder = new Order({
			author: req.userId,
			fullName,
			phone,
			departureDate,
			arrivalTime,
			seat,
			specialRequest,
		})

		await newOrder.save()
		await Agency.findByIdAndUpdate(agencyId, {
			$push: {
				orders: newOrder._id,
			},
		})
	} catch (error) {
		res.json({ message: 'Something went wrong' })
	}
}

//Update Order
export const updateOrder = async (req: Request, res: Response) => {
	try {
		const {
			fullName,
			phone,
			departureDate,
			arrivalTime,
			seat,
			specialRequest,
		} = req.body

		const order = await Order.findById(req.params.id)

		if (order) {
			order.fullName = fullName as string
			order.phone = phone as string
			order.departureDate = departureDate as Date
			order.arrivalTime = arrivalTime as Date
			order.seat = seat as number
			order.specialRequest = specialRequest as string
		} else {
			return res.json({ message: 'Something went wrong' })
		}
	} catch (error) {
		res.json({ message: 'Something went wrong' })
	}
}

//Delete Order
export const deleteOrder = async (req: Request, res: Response) => {
	try {
		const { agencyId } = req.body
		const order = await Order.findByIdAndDelete(req.params.id)

		if (!order) return res.json({ message: 'Order not found' })

		await Agency.findByIdAndUpdate(agencyId, {
			$pull: {
				orders: req.params.id,
			},
		})

		res.json({ message: 'Order has been deleted successfully' })
	} catch (error) {
		res.json({ message: 'Something went wrong' })
	}
}
