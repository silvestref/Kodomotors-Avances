import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

const salt = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000", // Dirección del frontend
    credentials: true,              // Si usas cookies o headers de autenticación
  }));


app.use(cookieParser());


const db = mysql.createConnection({  //Conexion con Base de Datos
    host: "localhost",
    user: "root",
    password: "root",
    database: "botkodomotors"
})

app.post("/sign-in", (req, res) => {
    const sql = "SELECT * FROM clientes WHERE correo = ?";
    db.query(sql, [req.body.email], (err, data) => {
        if(err) return res.json({Error: "Error de Login en el servidor"});
        if(data.length > 0) {
            return res.json({Status: "Success"});
        } else {
            return res.json({Error: "No existe el correo ingresado"});
        }
    })
}) 


app.listen(8081, ()=>{
    console.log("SERVER UP running in http://localhost:8081")
})