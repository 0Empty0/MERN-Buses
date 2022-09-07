import { Router } from 'express'

import { createOrder, updateOrder, deleteOrder } from '../controllers/order'
import { checkAuth } from '../utils/checkAuth'

const router = Router()

//Create Order
router.post('/', checkAuth, createOrder)

//Update Order
router.put('/:id', checkAuth, updateOrder)

//Delete Order
router.delete('/:id', checkAuth, deleteOrder)

export default router
