import { pool } from '../bd.js'; // Asegúrate de importar la conexión a la base de datos

// Obtener todas las citas
export const getAllAppointments = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM appointment_patient'); // Consulta a la tabla appointment_patient
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las citas' });
    }
};

// Obtener una cita por ID
export const getAppointmentById = async (req, res) => {
    const { id } = req.params; // Obtener el ID de la URL
    try {
        const [rows] = await pool.query('SELECT * FROM appointment_patient WHERE id = ?', [id]); // Ajustar según el campo ID de tu tabla
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Cita no encontrada' });
        }
        res.json(rows[0]); // Devolver la cita encontrada
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la cita' });
    }
};
