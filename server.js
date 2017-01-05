var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static('./public'));
app.get('/', function (req, res) {
    fs.readFile('./public/index.html', function(error, content) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(content, 'utf-8');
    });
});

app.listen(443, function () {
    console.log('Server listening!');
});