var express = require('express');

var app = express()

app.use('/web', express.static('web'));

app.get('/api/saludo', function (pet, resp) {
    var mensajes = ['Hola soy el API', '¿Qué tal, React?', 'EYYYYYYYY!!!']
    var obj = {
        mensaje: mensajes[Math.floor(Math.random()*mensajes.length)],
        hora: new Date().toLocaleTimeString()
    }
    resp.json(obj);
})

app.listen(3000, function() {
    console.log("API REST por el puerto 3000");
});