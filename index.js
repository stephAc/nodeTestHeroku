//Express

var express = require('express');
var app = express();
var todoController = require('./Controller/todoController');

//Template engine EJS
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));

//Listening to port
app.listen(3000);
console.log('Listening');

//Fire controller
todoController(app);

// app.get('/', (req, res) => {
//   res.send('Hello');
// });
// app.get('/:id', (req, res) => {
//   res.send('id ' + req.params.id);
// });

//Node
// const http = require('http');

// let server = http.createServer((req, res) => {
//   console.log('request was made ' + req.url);
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hey ninjas');
// });

// server.listen(3000, '127.0.0.1');
// console.log('Listening');
