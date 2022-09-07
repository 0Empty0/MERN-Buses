import express, { Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'

import userRouter from './routes/user'
import agencyRouter from './routes/agency'
import busRouter from './routes/bus'
import reviewRouter from './routes/review'
import orderRouter from './routes/order'

const app: Express = express()
dotenv.config()

//Constants
const { PORT, USER_NAME, USER_PASSWORD, DB_NAME } = process.env

//Middleware
app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))

//Routers
app.use('/api/user', userRouter)
app.use('/api/agency', agencyRouter)
app.use('/api/bus', busRouter)
app.use('/api/review', reviewRouter)
app.use('/api/order', orderRouter)

//Start
const start = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${USER_NAME}:${USER_PASSWORD}@cluster0.5grfzha.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
		)

		app.listen(PORT, () => {
			console.log('Server start on port: ' + PORT)
		})
	} catch (error) {
		console.error(error)
	}
}
start()
