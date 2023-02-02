let express = require('express');
let app = express();

console.log("Hello World");

app.get("/hola", (req, res) => {
  res.send("Hello Express");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  let cadena = "Hello json";

  const mySecret = process.env['MESSAGE_STYLE'];

  if (mySecret === "uppercase") {
    cadena = "Hello json".toUpperCase();
  }

  res.json({ "message": cadena });
});

//process.env.MESSAGE_STYLE=uppercase;

app.use( "/json", function( req, res, next ){
  console.log( req );
  console.log( req.method + " " + req.path + " - " + req.ip );
  next();
});
































module.exports = app;
