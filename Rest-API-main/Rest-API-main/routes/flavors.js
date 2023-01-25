import express from 'express'
import { getFlavors, getFlavors, addFlavors, 
    updateFlavors, deleteFlavors } from '../controllers/programs.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router();

router.get('/', verifyToken, getFlavors)
router.get('/:id', verifyToken, getFlavors)
router.post('/', verifyToken, addFlavors)
router.put('/:id', verifyToken, updateFlavors)
router.delete('/:id', verifyToken, deleteFlavors)

export default router