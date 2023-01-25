import express from 'express'
import { getSoda, getSoda, addSoda,
    updateSoda, deleteSoda } from '../controllers/curriculums.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router ({mergeParams: true})

router.get('/', verifyToken, getSoda)
router.get('/:id', verifyToken, getSoda)
router.post('/', verifyToken, addSoda)
router.put('/:id', verifyToken, updateSoda)
router.delete('/:id', verifyToken, deleteSoda)

export default router