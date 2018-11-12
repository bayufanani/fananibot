const http = require('http');

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end('<h1>Hello World</h1>');

});

server.listen(port,() => {

console.log(`Server running at port `+port);

});
/* // in sublime
var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'World'}));
});

app.listen(port, function () {
 console.log(`Example app listening on port !`);
}); */