import express from 'express'
import userRoute from './userRoute/index.js'
import TaskRoute from './taskRoute/index.js'


const router = express.Router()

router.use('/boss',userRoute)
router.use('/task',TaskRoute)

export default router