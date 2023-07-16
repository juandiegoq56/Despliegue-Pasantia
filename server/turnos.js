const express=require("express");
const app=express();
const mysql=require("mysql");
const cors=require("cors")

app.use(cors());
app.use(express.json());
const db=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"password",
    database:"usuarios"

});
/*db.connect((err)=>{
    if(err){console.log(err)
    }else{
        db.query("select* from usuarios;",(err,res)=>{

            if(err){
                console.log(err)
            }else{
                for(var elem of res){
                    console.log(elem)
                }
            }
        }
        
        )
    }

});*/

app.post("/create",(req,res)=>{
const Zona=req.body.Zona;
const Departamento=req.body.Departamento;
const Municipio=req.body.Municipio;

db.query('INSERT INTO turnos(Zona,Departamento,Municipio)VALUES(?,?,?)',[Zona,Departamento,Municipio],
(err,result)=>{
    if(err){

        console.log(err)
    }else{
        res.send("Usuario Registrado")
    }
}
);
});

app.get("/turnos",(req,res)=>{
   
    
    db.query('SELECT * FROM turnos',
    (err,result)=>{
        if(err){
    
            console.log(err)
        }else{
            res.send(result)
        }
    }

    );
    });

    app.put("/turnos/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const updatedData = req.body;
      console.log(updatedData,id)
        db.query(
            "UPDATE turnos SET Zona = ?   WHERE id = ?",
          [updatedData.value, id],
          (err, result) => {
            if (err) {
              console.error("Error al actualizar el registro:", err);
              res.status(500).json({ error: "Error al actualizar el registro" });
              return;
            }
      
            res.json({ message: "Registro actualizado exitosamente" });
          }
        );
      });
      
/* Consulta para verificar las credenciales de inicio de sesión en la base de datos
    const query = `SELECT * FROM usuarios WHERE nombre = ? AND email = ?`;
    connection.query(query, [nombre, email], (err, results) => {
      connection.end(); // Cerrar la conexión a la base de datos

      if (err) {
        console.error('Error al realizar la consulta: ', err);
        res.status(500).json({ error: 'Error al realizar la consulta' });
        return;
      }

      if (results.length === 1) {
        // Las credenciales son válidas
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
      } else {
        // Las credenciales son inválidas
        res.status(401).json({ error: 'Credenciales de inicio de sesión inválidas' });
      }
    });*/
  
    
app.listen(3002,()=>{
  
    console.log("Corriendo puerto 3002")
})
