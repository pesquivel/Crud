const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the MySQL database created in XAMPP
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

// Database API - get Student information
app.get("/", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// Add a new student
app.post("/create", (req, res) => {
  const sql = "INSERT INTO student (`Name`, `Email`) VALUES (?)";
  const values = [req.body.name, req.body.email];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// Update a student
app.post("/update/:id", (req, res) => {
  const sql = "UPDATE student SET `Name` = ?, `Email` = ? WHERE ID = ?";
  const values = [req.body.name, req.body.email];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// Delete a student
app.delete("/student/:id", (req, res) => {
  const sql = "DELETE FROM student WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, id, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
