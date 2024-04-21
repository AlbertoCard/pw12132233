var express=require("express");
var mysql=require("mysql");

var app=express(); //EJECUTAMOS EL CONSTRUCTOR

app.use(express.json());


//CONFIGURAMOS LA CONEXION 
 var conexion=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pw1213",
    port: 3306
});


//PROBAR LA CONEXION
 conexion.connect(function(error){
    if(error){
        console.log({errorRaro: error});
        throw error;
    }else{
        console.log("Conectado a la base de datos");
    }
})

const cors=require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true, 
    optionSuccessStatus:200,
}
app.use(cors(corsOptions))

//SOLICITUD
app.get("/",function (req, res){
    res.send("<h1>Ruta de inicio</h1>");
})

//VERBOS SOLICTUD DEL CLIENTE
//app.get();
//app.post();
//app.put();
//app.delete();

//-----------------------ALUMNOS------------------------------

// MOSTRAR A LOS ALUMNOS
app.get('/api/alumnos', (req, res) => {
    conexion.query("SELECT * FROM alumnos", (error, filas) =>{
        if (error){
            throw error;
        }
        else{
            res.header("Access-Control-Allow-Origin","*");
            res.send(filas);
        }
    });
})

// MOSTRAR SOLO UN ALUMNOS
app.get('/api/alumnos/:ncontrol', (req, res) => {
    // eficiente para que no recorra toda la tabla
    conexion.query("SELECT * FROM alumnos WHERE NCONTROL = ? LIMIT 1", [req.params.ncontrol], (error, fila) => { 
        if (error){
            throw error;
        }else{
            res.send(fila);
        }
    })
})

// AGREGAR UN ALUMNO
app.post("/api/alumnos", (req, res) => {
    let datos = {
        ncontrol: req.body.ncontrol,
        nombre: req.body.nombre,
        carrera: req.body.carrera,
        estatus: req.body.estatus
    };

    let sql = "INSERT INTO alumnos SET ?";
    conexion.query(sql, datos, function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});

//ACTUALIZAR DATOS DE ALUMNOS
app.put("/api/alumnos/:ncontrol", (req, res)=>{
    let ncontrol= req.params.ncontrol;
    let nombre= req.body.nombre;
    let carrera= req.body.carrera;
    let estatus= req.body.estatus;
    let sql="UPDATE alumnos SET nombre=?, carrera=?, estatus=? WHERE ncontrol=?"
    conexion.query(sql, [nombre, carrera, estatus, ncontrol], function(error,results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//ELIMINAR UN RESGISTRO DE ALUMNOS
app.delete("/api/alumnos/:ncontrol", (req, res)=>{
    conexion.query("DELETE FROM alumnos WHERE ncontrol=?", [req.params.ncontrol], function(error, filas){
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
})

// -----------------------MAESTROS----------------------------

//CONSULTAR TODOS LOS MAESTROS
app.get('/api/maestros', (req, res) => {
    conexion.query("SELECT * FROM maestros", (error, filas) =>{
        if (error){
            throw error;
        }
        else{
            res.header("Access-Control-Allow-Origin","*");
            res.send(filas);
        }
    });
})

// MOSTRAR SOLO UNN MAESTRO
app.get('/api/maestros/:clavemaestro', (req, res) => {
    // eficiente para que no recorra toda la tabla
    conexion.query("SELECT * FROM maestros WHERE clavemaestro = ? LIMIT 1", [req.params.clavemaestro], (error, fila) => { 
        if (error){
            throw error;
        }else{
            res.send(fila);
        }
    })
})

//AGREGAR UN MAESTRO
app.post("/api/maestros", (req, res)=>{
    let datos={
        clavemaestro: req.body.clavemaestro,
        nombre: req.body.nombre,
        departamento: req.body.departamento,
        estatus: req.body.estatus
    }
    let sql="INSERT INTO maestros SET ?"
    conexion.query(sql, datos, function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//ACTUALIZAR DATOS DE MAESTROS
app.put("/api/maestros/:clavemaestro", (req, res)=>{
    let clavemaestro= req.params.clavemaestro;
    let nombre= req.body.nombre;
    let departamento= req.body.departamento;
    let estatus= req.body.estatus;
    let sql="UPDATE maestros SET nombre=?, departamento=?, estatus=? WHERE clavemaestro=?"
    conexion.query(sql, [nombre, departamento, estatus, clavemaestro], function(error,results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//ELIMINAR UN RESGISTRO DE MAESTRO
app.delete("/api/maestros/:clavemaestro", (req, res)=>{
    conexion.query("DELETE FROM maestros WHERE clavemaestro=?", [req.params.clavemaestro], function(error, filas){
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
})

//------------------------MATERIAS---------------------
//MOSTRAR A TODOS LAS MATERIAS
app.get('/api/materias', (req, res) => {
    conexion.query("SELECT * FROM materias", (error, filas) =>{
        if (error){
            throw error;
        }
        else{
            res.header("Access-Control-Allow-Origin","*");
            res.send(filas);
        }
    });
})

// MOSTRAR SOLO UNA MATERIA
app.get('/api/materias/:clavemateria', (req, res) => {
    // eficiente para que no recorra toda la tabla
    conexion.query("SELECT * FROM materias WHERE clavemateria = ? LIMIT 1", [req.params.clavemateria], (error, fila) => { 
        if (error){
            throw error;
        }else{
            res.send(fila);
        }
    })
})

//AGREGAR UNA MATERIA
app.post("/api/materias", (req, res)=>{
    let datos={
        clavemateria: req.body.clavemateria,
        nombre: req.body.nombre,
        creditos: req.body.creditos
    }
    let sql="INSERT INTO materias SET ?"
    conexion.query(sql, datos, function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//ACTUALIZAR DATOS DE MATERIAS
app.put("/api/materias/:clavemateria", (req, res)=>{
    let clavemateria= req.params.clavemateria;
    let nombre= req.body.nombre;
    let creditos= req.body.creditos;
    let sql="UPDATE materias SET nombre=?, creditos=? WHERE clavemateria=?"
    conexion.query(sql, [nombre, creditos, clavemateria], function(error,results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//ELIMINAR UN RESGISTRO DE MATERIAS
app.delete("/api/materias/:clavemateria", (req, res)=>{
    conexion.query("DELETE FROM materias WHERE clavemateria=?", [req.params.clavemateria], function(error, filas){
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
})

//--------------------------GRUPOS--------------------------------
// MOSTRAR A LOS GRUPOS
app.get('/api/grupos', (req, res) => {
    conexion.query("SELECT * FROM grupos", (error, filas) =>{
        if (error){
            throw error;
        }
        else{
            res.header("Access-Control-Allow-Origin","*");
            res.send(filas);
        }
    });
})

// MOSTRAR SOLO UN GRUPO
app.get('/api/grupos/:clavegrupo', (req, res) => {
    // eficiente para que no recorra toda la tabla
    conexion.query("SELECT * FROM grupos WHERE clavegrupo = ? LIMIT 1", [req.params.clavegrupo], (error, fila) => { 
        if (error){
            throw error;
        }else{
            res.send(fila);
        }
    })
})

//AGREGAR UN GRUPO
app.post("/api/grupos", (req, res)=>{
    let datos={
        clavegrupo: req.body.clavegrupo,
        clavemateria: req.body.clavemateria,
        clavemaestro: req.body.clavemaestro,
        limitealumnos: req.body.limitealumnos,
        inscritos: req.body.inscritos,
        horariolunes: req.body.horariolunes,
        horariomartes: req.body.horariomartes,
        horariomiercoles: req.body.horariomiercoles,
        horariojueves: req.body.horariojueves,
        horarioviernes: req.body.horarioviernes
    }
    let sql="INSERT INTO grupos SET ?"
    conexion.query(sql, datos, function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//ACTUALIZAR DATOS DE GRUPOS
app.put("/api/grupos/:clavegrupo", (req, res)=>{
    let clavegrupo= req.params.clavegrupo;
    let clavemateria= req.body.clavemateria;
    let clavemaestro= req.body.clavemaestro;
    let limitealumnos= req.body.limitealumnos;
    let inscritos= req.body.inscritos;
    let horariolunes= req.body.horariolunes;
    let horariomartes= req.body.horariomartes;
    let horariomiercoles= req.body.horariomiercoles;
    let horariojueves= req.body.horariojueves;
    let horarioviernes= req.body.horarioviernes;
    let sql="UPDATE grupos SET limitealumnos=?, inscritos=?, horariolunes=?, horariomartes=?, horariomiercoles=?, horariojueves=?, horarioviernes=? WHERE clavegrupo=?"
    conexion.query(sql, [limitealumnos, inscritos, horariolunes, horariomartes, horariomiercoles, horariojueves, horarioviernes, clavegrupo], function(error,results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//ELIMINAR UN RESGISTRO DE GRUPO
app.delete("/api/grupos/:clavegrupo", (req, res)=>{
    conexion.query("DELETE FROM grupos WHERE clavegrupo=?", [req.params.clavegrupo], function(error, filas){
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
})
// app.get('/api/grupos', (req, res)=>{
//     conexion.query('SELECT clavegrupo, m.nombre, m.departamento, ma.nombre, '+
//     'limitealumnos, inscritos, horariolunes, horariomartes, horariomiercoles, horariojueves, horarioviernes'+
//     'FROM grupos g'+
//     'INNER JOIN maeterias m on g.clavemateria = m.clavemateria' +
//     'INNER JOIN maestros ma on g.clavemaestro = ma.clavemaestro' 
//     , (error, filas)=>{
//         if(error){
//             throw error;
//         }else{
//             res.header("Access-Control-Allow-Origin", "*");
//             res.send(filas);
//         }
//     })
// });
 
//Mostrar solo un grupo
app.get('/api/grupo/:id', (req, res)=>{
    conexion.query('SELECT * FROM grupo WHERE clavegrupo=? LIMIT 1', [req.params.id], (error, fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila);
        }
    })
});

//Encender el servidor
app.listen(3000, function(){
    console.log("Servidor encendido");
});
