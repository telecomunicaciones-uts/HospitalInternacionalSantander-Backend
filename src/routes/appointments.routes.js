import express from 'express';
import { getAllAppointments, getAppointmentById } from '../controllers/appointments.controller.js';

const router = express.Router();

// Obtener todas las citas
router.get('/', getAllAppointments);

// Obtener una cita por ID
router.get('/:id', getAppointmentById);

export default router;
