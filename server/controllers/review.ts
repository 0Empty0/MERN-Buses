import { Request, Response } from 'express'

import Bus from '../models/Bus'
import Review from '../models/Review'

//Create Review
export const createReview = async (req: Request, res: Response) => {
	try {
		const { busId, rate, title, text, date } = req.body

		const newReview = new Review({
			author: req.userId,
			rate,
			title,
			text,
			date,
		})

		await newReview.save()
		await Bus.findByIdAndUpdate(busId, {
			$push: {
				reviews: newReview._id,
			},
		})
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

//Update Review
export const updateReview = async (req: Request, res: Response) => {
	try {
		const { rate, title, text, date } = req.body
		const review = await Review.findById(req.params.id)

		if (review) {
			review.rate = rate as number
			review.title = title as string
			review.text = text as string
			review.date = date as Date
		} else {
			return res.json({
				message: 'Something went wrong',
			})
		}
		res.json(review)
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}

//Delete Review
export const deleteReview = async (req: Request, res: Response) => {
	try {
		const { busId } = req.body
		const review = await Review.findByIdAndDelete(req.params.id)

		if (!review) return res.json({ message: 'Review not found' })

		await Bus.findByIdAndUpdate(busId, {
			$pull: {
				reviews: req.params.id,
			},
		})

		res.json({ message: 'Review has been deleted successfully' })
	} catch (error) {
		res.json({
			message: 'Something went wrong',
		})
	}
}
