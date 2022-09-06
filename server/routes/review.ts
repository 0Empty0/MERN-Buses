import { Router } from 'express'

import { createReview, updateReview, deleteReview } from '../controllers/review'
import { checkAuth } from '../utils/checkAuth'

const router = Router()

//Create Review
router.post('/', checkAuth, createReview)

//Update Review
router.put('/:id', checkAuth, updateReview)

//Delete Review
router.delete('/:id', checkAuth, deleteReview)

export default router
