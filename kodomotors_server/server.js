import express from "express";
import mysql from "mysql2";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

const salt = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3001", // Dirección del frontend
    methods: ["POST", "GET"],
    credentials: true,              // Si usas cookies o headers de autenticación
  }));

app.use(cookieParser());


//Conexion con Base de Datos
const db = mysql.createConnection({  
    host: "localhost",
    user: "root",
    password: "root",
    database: "botkodomotors"
})


db.connect((err) => {
    if (err) {
        console.error("Error conectando a la base de datos:", err);
    } else {
        console.log("Conexión exitosa a la base de datos");
    }
});


//Verificación de logueo de usuario en base al token
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json({Error: "No estas logueado"});
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err) {
                return res.json({Error: "Token is not okey"});
            } else {
                req.name = decoded.name;
                next()      //Pase al siguiente componente
            }
        })
    }
}


//Para el envío al Front dependiendo de la validación del Token
app.get("/", verifyUser, (req, res) =>{
    return res.json({Status: "Success", name: req.name})
})


// Consulta de correo y constraseña ingresado en BBDD
app.post("/sign-in", (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE correo = ?";
    db.query(sql, [req.body.email], (err, data) => {
        if(err) return res.json({Error: "Error de Login en el servidor"});
        if(data.length > 0) {   //Si encuentra coincidencias en BBDD
            bcrypt.compare(req.body.password.toString(), data[0].contraseña, (err, response) => { //Hashing
                if(err) return res.json({Error: "No se pudo realizar la comparación"});
                if(response) {
                    const name = data[0].name;
                    const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: "1d"});  //Generacion Token
                    res.cookie("token", token);
                    return res.json({Status: "Success"});  //Devuelve Success si se aprobó la comparación
                } else {
                    return res.json({Error: "Contraseña incorrecta"});
                }
            })        
        } else {
            return res.json({Error: "No existe el correo ingresado"});
        }
    })
}) 


//Para el cierre de sesión
app.get("/logout", (req, res) => {
    res.clearCookie("token");
    return res.json({Status: "Success"});
})


app.listen(8081, ()=>{
    console.log("SERVER UP running in http://localhost:8081")
})