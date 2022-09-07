import { Request, Response } from 'express'

import User from '../models/User'
import Agency from '../models/Agency'
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
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

//Delete Agency
export const deleteAgency = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

//Get Agency
export const getAgency = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

//Get Agencies
export const getAgencies = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

//Get Agency Order
export const getAgencyOrder = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

//Get Agency Buses
export const getAgencyBuses = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}
