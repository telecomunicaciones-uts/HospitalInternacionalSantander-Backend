import { pool } from '../bd.js'; // Asegúrate de importar la conexión a la base de datos

// Obtener todos los pacientes
export const getAllPatients = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM patient'); // Consulta a la tabla patient
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los pacientes' });
    }
};

// Obtener un paciente por ID
export const getPatientById = async (req, res) => {
    const { id } = req.params; // Obtener el ID de la URL
    try {
        const [rows] = await pool.query('SELECT * FROM patient WHERE Id_Patient = ?', [id]); // Ajustar según el campo ID de tu tabla
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Paciente no encontrado' });
        }
        res.json(rows[0]); // Devolver el paciente encontrado
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el paciente' });
    }
};
