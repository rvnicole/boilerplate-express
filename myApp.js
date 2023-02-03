let express = require('express');
let app = express();

let bodyParser = require( 'body-parser' );
app.use(bodyParser.urlencoded({ extended: false }));

console.log("Hello World");

app.get("/hola", (req, res) => {
  res.send("Hello Express");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));


//process.env.MESSAGE_STYLE=uppercase;

app.use( "/json", function( req, res, next ){
  //console.log( req );
  console.log( req.method + " " + req.path + " - " + req.ip );
  next();
});

app.get("/json", (req, res) => {
  let cadena = "Hello json";

  const mySecret = process.env['MESSAGE_STYLE'];

  if (mySecret === "uppercase") {
    cadena = "Hello json".toUpperCase();
  }

  res.json({ "message": cadena });
});

app.get( "/now", ( req, res, next ) => {

    req.time = ( new Date() ).toString();
    next();

}, ( req, res ) => {

    res.send( { time : req.time } );

});

app.get( "/:word/echo", ( req, res ) => {
  
  const { word } = req.params;
  res.json( { echo : word } );

});

app.get( "/name", ( req, res ) => {

  const { first, last } = req.query;
  res.json( { name: first + " " + last } );

});

app.post( "/name", ( req, res ) => {

  const { first, last } = req.body;
  res.json( { name: first + " " + last } );
  
});































module.exports = app;
