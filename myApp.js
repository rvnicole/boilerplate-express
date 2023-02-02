let express = require('express');
let app = express();

console.log( "Hello World");

app.get( "/hola", ( req, res ) => {
    res.send( "Hello Express" );
});

app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/views/index.html" );
});

app.use( "/public", express.static( __dirname + "/public" ) );

app.get( "/json", ( req, res ) => {
    res.json( { "message": "Hello json" } );
});

process.env.MESSAGE_STYLE=uppercase;
































 module.exports = app;
