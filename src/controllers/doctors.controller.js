// Ejemplo de datos de doctores
const doctors = [
    { id: "1", name: "Dr. Juan Gómez", specialty: "Internal Medicine" },
    { id: "2", name: "Dr. María Pérez", specialty: "Pediatrics" }
];

// Obtener todos los doctores
export const getAllDoctors = (req, res) => {
    res.json(doctors);
};

// Obtener un doctor por ID
export const getDoctorById = (req, res) => {
    const doctor = doctors.find(doc => doc.id === req.params.id);
    if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(doctor);
};
