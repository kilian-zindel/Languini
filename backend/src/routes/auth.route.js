import express from 'express'
import { signup, login, logout, checkAuth, updateProfile } from '../controllers/auth.controller.js'
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout); 
router.get('/check', protectRoute, checkAuth) // quick check called on refresh 
router.put('/update-profile', protectRoute, updateProfile)

export default router; 

