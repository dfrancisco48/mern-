import express from 'express'
import { getbeverages, getbeverages, addbeverages, updatebeverages, deletebeverages } from './beverages.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergeParams: true})

router.get('/', verifyToken, getbeverages)
router.get('/:id', verifyToken, getbeverages)
router.post('/', verifyToken, addbeverages)
router.put('/:id', verifyToken, updatebeverages)
router.delete('/:id', verifyToken, deletebeverages)

export default router