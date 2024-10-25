![Company Logo](logo.jpg)

# Company Description

## Company Name
**International Hospital of Santander**

## Company History
The Santander International Hospital (HIS) was created with the aim of meeting the growing healthcare needs in the region by providing high-quality, accessible healthcare services.

## Mission
To offer patient-centered medical care, ensuring a humanized approach and a care environment that promotes recovery and well-being.

## Vision
The International Hospital of Santander is projected as a comprehensive medical center that not only seeks to offer quality care, but also to innovate in the patient experience and contribute to the development of health in the region. It is aligned with international standards, constantly seeking improvement and excellence in all its processes and services.

## Values
- **Humanity**: Prioritizing the well-being and dignity of patients, offering empathetic and compassionate care.
- **Quality**: Commitment to excellence in all services provided, ensuring that the highest standards of healthcare are met.
- **Innovation**: Encourage the adoption of new technologies and practices that improve patient care and optimize internal processes.
- **Integrity**: Act honestly and transparently in all interactions, both with patients and with staff and the community.
- **Social responsibility**: Commitment to the health and well-being of the community, through prevention and health education programs.

## Services
- **Emergencies**: An area dedicated to the immediate attention of medical emergencies.
- **Hospitalization**: Comfortable rooms equipped for the care of patients who require prolonged care.
- **Intensive care**: Specialized units for critically ill patients, with advanced technology for monitoring and treatment.
- **Operating rooms**: Rooms equipped to perform surgeries in various specialties, including general surgery, orthopedics, and oncology.
- **Outpatient consultation**: Outpatient services where patients can receive care without the need for hospitalization.

## Management Team
The International Hospital of Santander has a highly qualified management team, committed to the mission of offering quality and humanized medical care. It has:

- **General Director**: Responsible for the strategic direction of the hospital, ensuring that quality standards are met and best practices in healthcare are implemented.
- **Medical Director**: Oversees the quality of medical care, coordinates clinical services, and ensures that safety and quality protocols are maintained in the treatment of patients.
- **Director of Technology and Information Systems**: In charge of managing the hospital's technological infrastructure, ensuring that the right tools are used to improve efficiency and patient care.
- **Human Resources Director**: Responsible for hiring, training, and staff development, promoting a positive and collaborative work environment.
- **Chief Financial Officer**: In charge of the hospital's financial planning and management, ensuring the economic viability of operations and investment in infrastructure and technology.

![Company database](DB.jpg)
![Company database](DB2.jpg)

# **ROUETES OF API**

# API Route Descriptions

### Doctors

1. **All Doctors:** `http://localhost:4000/doctors`
   - **What it does:** This route allows you to get the complete list of doctors registered in the system.
   - **What it responds:** Returns an array of JSON objects, where each object represents a doctor and includes details such as doctor ID, name, specialty, phone number, email, among other data.

2. **Doctor by ID:** `http://localhost:4000/doctors/1`
   - **What it does:** This route allows you to get detailed information about a specific doctor using their ID.
   - **What it responds:** Returns a JSON object with the details of the doctor with the specified ID, including information such as name, specialty, phone number, and email.

### Patients

1. **All Patients:** `http://localhost:4000/patients`
   - **What it does:** This route provides a list of all patients registered in the system.
   - **What it responds:** Returns an array of JSON objects, where each object represents a patient and includes information such as patient ID, first name, last name, phone number, email, among other details.

2. **Patient by ID:** `http://localhost:4000/patients/1`
   - **What it does:** This route allows you to get detailed information about a particular patient using their ID.
   - **What it responds:** Returns a JSON object with the details of the patient with the specified ID, such as first name, last name, phone number, and email.

### Appointments

1. **All Appointments:** `http://localhost:4000/appointments`
   - **What it does:** This route allows you to get a complete list of all appointments registered in the system.
   - **What it responds:** Returns an array of JSON objects, where each object represents an appointment and includes information such as appointment ID, date and time, status (pending or completed), and the reason for the consultation.

2. **Appointment by ID:** `http://localhost:4000/appointments/1`
   - **What it does:** This route allows you to get detailed information about a specific appointment using its ID.
   - **What it responds:** Returns a JSON object with the details of the appointment with the specified ID, such as the date and time of the appointment, status (pending or completed), and the reason for the consultation.

## VIDEO CREATE ROUTES 

Hello everyone! In today's video, we'll learn how to implement GET routes in Visual Studio Code to interact with an API. We'll see how to make requests and retrieve data easily. Join me as we explore the power of APIs together!

https://youtu.be/-ct6pHWOa7Q

# Full Project Description: Backend, Database, and Frontend

## Backend

The backend of this project was developed using **Node.js** with the **Express** framework. This combination provides a robust and flexible structure to handle routes and controllers that allow communication between the client and the server. Below is a detailed description of each component:

- **Controllers and Routes:**
  - **Controllers** are responsible for handling business logic. Each controller defines the specific functionality that is executed when a request arrives at a given route. For instance, when information about a doctor or patient is requested, the corresponding controller retrieves the data from the database and returns it to the client.
  - **Routes** are defined in the Express route configuration file, allowing access to different resources in the system, such as doctors, patients, and appointments. Each route is associated with an HTTP operation, such as GET, POST, PUT, or DELETE, to perform the various required actions, like retrieving, creating, updating, or deleting information.

- **Main Routes:**
  - `GET /doctors`: Retrieves the list of all registered doctors.
  - `GET /doctors/:id`: Retrieves information about a specific doctor by their ID.
  - `GET /patients`: Retrieves the list of all registered patients.
  - `GET /patients/:id`: Retrieves information about a specific patient by their ID.
  - `GET /appointments`: Retrieves the list of all appointments.
  - `GET /appointments/:id`: Retrieves information about a specific appointment by its ID.

- **Error Handling and Security:**
  - The backend implements **error handlers** to ensure proper management of exceptions and messages to the client if errors occur during the execution of operations.
  - Basic **security measures** have also been incorporated, such as input validation and route protection to prevent attacks like SQL injection.

## Database

The database used in this project is configured using **XAMPP**, which provides a simple local environment for managing databases with **MySQL**. XAMPP facilitates database management and allows for queries and modifications using graphical tools such as **phpMyAdmin**.

- **Database Structure:**
  - The database consists of several tables, including:
    - **Doctors**: Stores information about doctors, such as ID, name, specialty, phone number, and email.
    - **Patients**: Stores information about patients, including ID, first name, last name, phone number, and email.
    - **Appointments**: Contains information about appointments, including appointment ID, date and time, status (pending or completed), and the reason for the consultation.

- **Backend-Database Connection:**
  - The connection between the backend and the MySQL database is established using an **ORM (Object-Relational Mapping)** such as **Sequelize**, or through **mysql2** for direct SQL queries. This approach facilitates the management of relationships between tables and improves security by preventing SQL injection.

## Frontend

The frontend was developed using **React Native**, which allows the application to be cross-platform and work on both iOS and Android devices. The user interface is designed to be intuitive, focusing on ease of use for managing doctors, patients, and appointments.

- **Main Screens:**
  - **Home Screen:** Contains buttons to navigate to the different sections: doctors, patients, and appointments. Each button leads to a specific screen where the complete information can be viewed or searched by specific ID.
  - **View Doctors, Patients, and Appointments:** Each screen displays a general list of items (doctors, patients, or appointments) and allows specific searches by ID to get detailed information.
  - **Search by ID:** Each listing screen has a search field that allows the user to search for a specific doctor, patient, or appointment by their ID. This facilitates navigation and quick access to information.

- **Styling and Components:**
  - The interface components were created using **React Native components** such as `FlatList` to display lists, `TextInput` to enter the ID for searches, and `TouchableOpacity` for interaction buttons.
  - **Navigation** was implemented with **React Navigation**, allowing smooth transitions between the different screens of the application.

## Data Flow Summary

1. **Client Request:** The user interacts with the mobile application (frontend), chooses an option like “View Doctors,” and, if necessary, enters an ID to perform a specific search.
2. **Backend Request:** The application makes an HTTP request to the backend using **axios**. Depending on the action, this request can be to get all data or the data of a single record.
3. **Server Processing:** The backend processes the request, calls the corresponding controller, which in turn communicates with the database to retrieve the requested information.
4. **Client Response:** The backend sends the response in JSON format to the frontend, which then displays the information in a user-friendly and organized interface.

## Use of XAMPP

**XAMPP** was used to provide a simple local development environment that includes an Apache server and a MySQL database. With **phpMyAdmin**, the database can be easily visualized and managed, allowing manual SQL queries, checking the status of tables, and modifying records if necessary. This makes database configuration and testing quick and efficient.

This complete workflow, from backend to frontend, ensures that the application is easy to use, with a clear architecture and an efficient data flow, thus guaranteeing a satisfying experience for users and easy system management for developers.



![Company database](Rutas.jpg)

## Developers
- **Melissa Sanabria**
- **Elkin Ortega**
- **Madwin Palacio**
- **Cielo Mariño**


