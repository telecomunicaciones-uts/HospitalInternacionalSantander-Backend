// Ejemplo de datos de citas
const appointments = [
    { id: "1", doctorId: "1", patientId: "1", date: "2024-08-15", time: "10:00" },
    { id: "2", doctorId: "2", patientId: "2", date: "2024-08-16", time: "11:00" }
];

// Obtener todas las citas
export const getAllAppointments = (req, res) => {
    res.json(appointments);
};

// Obtener una cita por ID
export const getAppointmentById = (req, res) => {
    const appointment = appointments.find(app => app.id === req.params.id);
    if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json(appointment);
};
