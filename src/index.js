require('dotenv').config()
const express = require("express"),
    path = require("path"),
    app = express(),
    puerto = process.env.PORT || 3000;

app.get('/', (peticion, respuesta) => {
    let agenteDeUsuario = peticion.header("user-agent");
    respuesta.send("La ruta / solicitada con: " + agenteDeUsuario);
});
app.get('/pagina', (peticion, respuesta) => {
    let rutaDeArchivo = path.join(__dirname, "plantilla.html");
    respuesta.sendFile(rutaDeArchivo);
});

app.get('/hola', (peticion, respuesta) => {
    let mascota = {
        nombre: "Maggie",
        edad: 2,
    };
    respuesta.json(mascota);
});

// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(puerto, err => {
    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    // Si no se detuvo arriba con el return, entonces todo va bien ;)
    console.log(`Escuchando en el puerto :${puerto}`);
});