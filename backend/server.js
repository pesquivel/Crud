const express = require("express");
const cors = require("cors");
const mysql = require("mysql2"); // Cambiado a mysql2 para mayor compatibilidad

const app = express();
app.use(express.json()); // Middleware para procesar JSON
app.use(cors()); // Middleware para permitir CORS

// Conectar a MySQL con mysql2
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pruebapablo123",
  database: "crud"
});

// Verificar conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error("Error conectando a MySQL:", err.message);
    process.exit(1); // Detiene la aplicación si no hay conexión
  }
  console.log("Conectado a la base de datos MySQL.");
});

// **GET**: Obtener todos los estudiantes
app.get("/", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error ejecutando la consulta:", err);
      return res.json("Error");
    }
    res.json(data);
  });
});

// **POST**: Crear un nuevo estudiante
app.post("/create", (req, res) => {
  const sql = "INSERT INTO student (Name, Email) VALUES (?, ?)";
  const values = [req.body.name, req.body.email];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error al insertar estudiante:", err);
      return res.json("Error");
    }
    res.json(data);
  });
});

// **POST**: Actualizar un estudiante por ID
app.post("/update/:id", (req, res) => {
  const sql = "UPDATE student SET Name = ?, Email = ? WHERE ID = ?";
  const values = [req.body.name, req.body.email, req.params.id];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error al actualizar estudiante:", err);
      return res.json("Error");
    }
    res.json(data);
  });
});

// **DELETE**: Eliminar un estudiante por ID
app.delete("/student/:id", (req, res) => {
  const sql = "DELETE FROM student WHERE ID = ?";
  const id = req.params.id;

  db.query(sql, id, (err, data) => {
    if (err) {
      console.error("Error al eliminar estudiante:", err);
      return res.json("Error");
    }
    res.json(data);
  });
});

// Iniciar el servidor en el puerto 8080
app.listen(8080, () => {
  console.log("Servidor corriendo en http://localhost:8080");
});
