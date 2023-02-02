let express = require('express');
let app = express();

console.log( "Hello World");

app.get( "/hola", ( req, res ) => {
    res.send( "Hello Express" );
});

app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/views/index.html" );
});



































 module.exports = app;
