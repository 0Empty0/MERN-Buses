import { Router } from 'express'

import {
	createBus,
	updateBus,
	deleteBus,
	getBus,
	getBuses,
	getBusReviews,
} from '../controllers/bus'
import { checkAuth } from '../utils/checkAuth'

const router = Router()

//Create Bus
router.post('/', checkAuth, createBus)

//Update Bus
router.put('/:id', checkAuth, updateBus)

//Delete Bus
router.delete('/:id', checkAuth, deleteBus)

//Get Bus
router.get('/:id', getBus)

//Get Buses
router.get('/', getBuses)

//Get Bus Reviews
router.get('/reviews/:id', getBusReviews)

export default router
