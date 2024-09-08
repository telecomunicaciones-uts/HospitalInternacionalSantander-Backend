import express from 'express';
import { getAllDoctors, getDoctorById } from '../controllers/doctors.controller.js';

const router = express.Router();

// Obtener todos los doctores
router.get('/', getAllDoctors);

// Obtener un doctor por ID
router.get('/:id', getDoctorById);

export default router;
