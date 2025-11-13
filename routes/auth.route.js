import express from 'express';
import { login, register, logout } from '../controllers/auth.controller.js';

const router = express.Router();

// Define auth-related routes here.   
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);



export default router;