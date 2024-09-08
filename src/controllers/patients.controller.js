// Ejemplo de datos de pacientes
const patients = [
    { id: "1", name: "Maria Angelica", age: 30 },
    { id: "2", name: "Juan David", age: 45 }
];

// Obtener todos los pacientes
export const getAllPatients = (req, res) => {
    res.json(patients);
};

// Obtener un paciente por ID
export const getPatientById = (req, res) => {
    const patient = patients.find(pat => pat.id === req.params.id);
    if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
};
