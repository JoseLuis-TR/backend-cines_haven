// Se importa express y se crea una instancia de express
const express = require("express");
const app = express();
// Se importa el módulo de cors para permitir el acceso a la API desde cualquier origen
const cors = require("cors");
// Se importan las rutas
const havenRoutes = require("./routes/v1/indexRoutes")

// Se configura el servidor
app.use(cors())
app.use(express.json())
app.use("/havenV1", havenRoutes.router)

// Esta ruta es creada para poder pedir desde el front-end las distintas
// imagenes que se guarden en el servidor y puedan ser mostradas
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

// Middleware para capturar errores
app.use((err,req,res,next) => {
    console.log("Se ha recogido algún error");
    console.log(err)
    res.status(500).end();
})

// Se configura el puerto de escucha del servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server escuchando en el puerto ${PORT}`);
});

module.exports = app;