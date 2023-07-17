const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");

app.use(express.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "usuarios",
});

const corsOptions = {
  origin: "http://10.142.6.71",
};

app.use(cors(corsOptions));

app.post("/create", (req, res) => {
  const Nombre = req.body.Nombre;
  const Apellido = req.body.Apellido;
  const Email = req.body.Email;
  const password = req.body.password;

  db.query(
    "INSERT INTO usuarios(Nombre,Apellido,Email,password) VALUES (?,?,?,?)",
    [Nombre, Apellido, Email, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al registrar el usuario");
      } else {
        res.send("Usuario Registrado");
      }
    }
  );
});

app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error al obtener los usuarios");
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Servidor backend corriendo en el puerto 3001");
});
