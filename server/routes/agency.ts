import { Router } from 'express'

import {
	createAgency,
	updateAgency,
	deleteAgency,
	getAgency,
	getAgencies,
	getMyAgency,
	getAgencyOrder,
	getAgencyBuses,
} from '../controllers/agency'
import { checkAuth } from '../utils/checkAuth'

const router = Router()

//Create Agency
router.post('/', checkAuth, createAgency)

//Update Agency
router.put('/:id', checkAuth, updateAgency)

//Delete Agency
router.delete('/:id', checkAuth, deleteAgency)

//Get Agency
router.get('/:id', getAgency)

//Get Agencies
router.get('/', getAgencies)

//Get My Agency
router.get('/user', checkAuth, getMyAgency)

//Get Agency Order
router.get('/orders/:id', getAgencyOrder)

//Get Agency Buses
router.get('/buses/:id', getAgencyBuses)

export default router
