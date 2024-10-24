import express from 'express';
import dotenv from 'dotenv';
import doctorRoutes from './routes/doctors.routes.js';
import patientRoutes from './routes/patients.routes.js';
import appointmentRoutes from './routes/appointments.routes.js';

dotenv.config();
const app = express();

app.use(express.json()); // Middleware para parsear JSON

// Usa los prefijos para las rutas
app.use('/doctors', doctorRoutes);
app.use('/patients', patientRoutes);
app.use('/appointments', appointmentRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

});
