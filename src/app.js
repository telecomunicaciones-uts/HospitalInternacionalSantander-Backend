import express from 'express';
import doctorsRoutes from './routes/doctors.routes.js';
import patientsRoutes from './routes/patients.routes.js';
import appointmentsRoutes from './routes/appointments.routes.js';

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/doctors', doctorsRoutes);
app.use('/api/patients', patientsRoutes);
app.use('/api/appointments', appointmentsRoutes);

// Manejar rutas no encontradas
app.use((req, res) => {
    console.log("Petición a ruta no encontrada, respondiendo eso...");
    res.status(404).json({ message: "Endpoint no encontrado" });
});

export default app;
