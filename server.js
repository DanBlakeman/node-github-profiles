var express = require('express');
var app = express();
var server = require('http').createServer(app);

server.listen(process.env.PORT || 3000, function() {
  console.log('server is listening on port 3000');
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html')
});

app.get('*', function(request, response){
  response.send("<h1 style='text-align: center; font-size: 9em'> WHAAA? </h2>", 404);
});

module.exports = server;