var http = require('http');
var five = require('johnny-five');
var url = require('url') ;
var board = new five.Board();
var led;
const PORT=8080; 

function handleRequest(request, response){
	
	var path = url.parse(request.url,false);
	var queryObject = url.parse(request.url,true).query;

	if (path.pathname == "/color") {
		led.color({red: queryObject.r, blue: queryObject.b, green: queryObject.g});	
	}

	 response.writeHeader(200,{"Access-Control-Allow-Origin": "*"} );  
     response.end();  
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});

board.on('ready', function() {
	led = new five.Led.RGB({
    pins: { red: 6, green: 5, blue: 3 }
  });
});