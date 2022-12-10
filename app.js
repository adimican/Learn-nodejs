const http = require('http');


function handleRequest (request, response) {
    if (request.url === '/currenttime'){
        response.statusCode =200;
        response.end('<h1>' + new Date().toISOString() +'</h1>');
    
    } else {
    response.statusCode =200;
    response.end('<h1>Hello Word !</h1>');
    }

}

const server = http.createServer(handleRequest);

const userName = 'Mican Adrian';

console.log(userName);

server.listen(3000);