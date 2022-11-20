import { Request, Response } from 'express'
import { SchemaType } from 'mongoose'

import Review from '../models/Review'
import Bus from '../models/Bus'
import Agency from '../models/Agency'
import { saveImages } from '../utils/saveImages'

//Create Bus
export const createBus = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      price,
      discount,
      from,
      to,
      stops,
      seats,
      schedule,
    } = req.body

    if (req.files) {
      const filenames = saveImages(req.files)

      const newBus = new Bus({
        author: req.userId,
        title,
        description,
        price,
        discount,
        thumbnails: filenames,
        from,
        to,
        stops,
        seats,
        schedule,
      })

      await newBus.save()
      await Agency.findByIdAndUpdate(req.userId, {
        $push: { buses: newBus },
      })

      return res.json(newBus)
    } else {
      res.json({ status: 'Something went wrong' })
    }
  } catch (error) {
    res.json({ status: 'Something went wrong' })
  }
}

//Update Bus
export const updateBus = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      price,
      discount,
      thumbnail,
      from,
      to,
      stops,
      seats,
      schedule,
      id,
    } = req.body
    const bus = await Bus.findById(id)

    if (bus) {
      if (req.files) {
        const filenames = saveImages(req.files)

        bus.thumbnails = [filenames] || ''
      }
      bus.title = title as string
      bus.description = description as string
      bus.price = price as number
      bus.discount = discount as number
      bus.from = from as string
      bus.to = to as string
      bus.stops = stops as string[]
      bus.seats = seats as SchemaType<any>
      bus.schedule = schedule as string[][]
    } else {
      throw new Error('Something went wrong')
    }
  } catch (error) {
    res.json({ status: 'Something went wrong' })
  }
}

//Delete Bus
export const deleteBus = async (req: Request, res: Response) => {
  try {
    const bus = await Bus.findByIdAndDelete(req.params.id)

    if (!bus) return res.json({ status: 'Bus not found' })

    await Agency.findByIdAndUpdate(req.userId, {
      $pull: {
        buses: req.params.id,
      },
    })

    res.json({ status: 'Bus successfully deleted' })
  } catch (error) {
    res.json({ status: 'Something went wrong' })
  }
}

//Get Bus
export const getBus = async (req: Request, res: Response) => {
  try {
    const bus = await Bus.findById(req.params.id)

    res.json(bus)
  } catch (error) {
    res.json({ status: 'Something went wrong' })
  }
}

//Get Buses
export const getBuses = async (req: Request, res: Response) => {
  try {
    const buses = await Bus.find().sort('-createdAt')

    if (!buses) return res.json({ status: 'No Agency found' })

    res.json(buses)
  } catch (error) {
    res.json({ status: 'Something went wrong' })
  }
}

//Get Bus Reviews
export const getBusReviews = async (req: Request, res: Response) => {
  try {
    const bus = await Bus.findById(req.params.id)

    if (!bus) return res.json({ status: 'No buses found' })

    const list = await Promise.all(
      bus.reviews.map((review) => Review.findById(review))
    )

    res.json(list)
  } catch (error) {
    res.json({ status: 'Something went wrong' })
  }
}
