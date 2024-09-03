# **1. Register a New Patient**

This route allows a new patient to be registered in the hospital management system.

**Route:** `POST http://localhost:4000/api/pacientes`

**Parameters:**
- `name`: (String) Full name of the patient.
- `cedula`: (String) Patient ID or ID number.
- `fecha_nacimiento`: (String) Date of birth in YYYY-MM-DD format.
- `telephone`: (String) Contact phone number.
- `address`: (String) Residence address.
- `email`: (String) Patient email (optional).

**Sample request:**

```json
POST http://localhost:4000/api/pacientes
{
  "name": "Juan Pérez",
  "cedula": "123456789",
  "fecha_nacimiento": "1985-05-15",
  "telephone": "555-1234",
  "address": "Calle Falsa 123",
  "email": "juan.perez@example.com"
}
