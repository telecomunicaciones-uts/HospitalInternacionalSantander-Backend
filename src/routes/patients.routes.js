import express from 'express';
import { getAllPatients, getPatientById } from '../controllers/patients.controller.js';

const router = express.Router();

// Obtener todos los pacientes
router.get('/', getAllPatients);

// Obtener un paciente por ID
router.get('/:id', getPatientById);

export default router;
