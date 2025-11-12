import express from 'express'
import { register, reVerify, verify, login, logout, forgotPassword, verifyOTP, changePassword, allUser, getUserById } from '../controllers/userController.js'
import { isAdmin, isAuthenticated } from '../middleware/isAuthenticated.js'


const router = express.Router()

router.post('/register', register)
router.post('/verify', verify)
router.post('/reVerify', reVerify)
router.post('/login', login)
router.post(' /logout',isAuthenticated, logout)
router.post('/forgot-password', forgotPassword )
router.post('/verify-otp/:email', verifyOTP )
router.post('/change-password/:email', changePassword )
router.get('/all-user', isAuthenticated, isAdmin, allUser)
router.get('/get-user/:userId', getUserById)

export default router