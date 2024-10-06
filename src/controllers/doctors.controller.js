import { pool } from '../bd.js'; // Asegúrate de importar la conexión a la base de datos

// Obtener todos los doctores
export const getAllDoctors = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM doctor'); // Consulta a la tabla doctor
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los doctores' });
    }
};

// Obtener un doctor por ID
export const getDoctorById = async (req, res) => {
    const { id } = req.params; // Obtener el ID de la URL
    try {
        const [rows] = await pool.query('SELECT * FROM doctor WHERE id = ?', [id]); // Ajustar según el campo ID de tu tabla
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Doctor no encontrado' });
        }
        res.json(rows[0]); // Devolver el doctor encontrado
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el doctor' });
    }
};
