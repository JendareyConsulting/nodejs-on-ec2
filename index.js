var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Welcome Jendarey Consulting, Inc. Working to improve you! Need a career change and a pay increase? We invite you to an online Anti-Money Laundering Career Training lanre.'); //write a response to the client
  res.end(); //end the response
}).listen(4000); //the server object listens on port 4000
