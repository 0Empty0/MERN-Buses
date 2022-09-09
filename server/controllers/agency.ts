import { Request, Response } from 'express'

import User from '../models/User'
import Agency from '../models/Agency'
import Order from '../models/Order'
import Bus from '../models/Bus'
import { saveImages } from '../utils/saveImages'

//Create Agency
export const createAgency = async (req: Request, res: Response) => {
	try {
		const { title } = req.body

		if (req.files) {
			const filename = saveImages(req.files.logo)

			const newAgency = new Agency({
				author: req.userId,
				title,
				logo: filename,
			})

			await newAgency.save()
			await User.findByIdAndUpdate(req.userId, {
				$push: { agencies: newAgency },
			})

			return res.json(newAgency)
		} else {
			res.json({
				message: 'Something went wrong',
			})
		}
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

//Update Agency
export const updateAgency = async (req: Request, res: Response) => {
	try {
		const { title, id } = req.body
		const agency = await Agency.findById(id)

		if (agency) {
			if (req.files) {
				const filename = saveImages(req.files.logo)

				agency.logo = filename || ''
			}

			agency.title = title as string

			await agency.save()
		} else {
			throw new Error('Something went wrong')
		}
		res.json(agency)
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

//Delete Agency
export const deleteAgency = async (req: Request, res: Response) => {
	try {
		const agency = await Agency.findByIdAndDelete(req.params.id)

		if (!agency) return res.json({ message: 'No Agency found' })

		await User.findByIdAndUpdate(req.userId, {
			$pull: {
				agencies: req.params.id,
			},
		})

		res.json({ message: 'Agency has been deleted' })
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

//Get Agency
export const getAgency = async (req: Request, res: Response) => {
	try {
		const agency = await Agency.findById(req.params.id)

		res.json(agency)
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

//Get Agencies
export const getAgencies = async (req: Request, res: Response) => {
	try {
		const agencies = await Agency.find().sort('-createdAt')

		if (!agencies) return res.json({ message: 'No Agency found' })

		res.json(agencies)
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}
//Get My Agencies
export const getMyAgency = async (req: Request, res: Response) => {
	try {
		const user = await User.findById(req.userId)

		if (!user) return res.json({ message: 'User not found' })

		const list = await Promise.all(
			user.agencies.map(agency => Agency.findById(agency))
		)

		res.json(list)
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

//Get Agency Order
export const getAgencyOrder = async (req: Request, res: Response) => {
	try {
		const agency = await Agency.findById(req.params.id)

		if (!agency) return res.json({ message: 'No Agency found' })

		const list = await Promise.all(
			agency.orders.map(order => Order.findById(order))
		)

		res.json(list)
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

//Get Agency Buses
export const getAgencyBuses = async (req: Request, res: Response) => {
	try {
		const agency = await Agency.findById(req.params.id)

		if (!agency) return res.json({ message: 'No Agency found' })

		const list = await Promise.all(agency.buses.map(bus => Bus.findById(bus)))

		res.json(list)
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}
