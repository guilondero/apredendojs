

const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  
  if (request.url === '/nomes'){
    console.log(request.url);
    response.end(
        JSON.stringify({
            data: "bruno",
            message: "frizzo",
    })
    );
  }

  if (request.url === '/gurias'){
    console.log(request.url);
    response.end(JSON.stringify({
        message: 'Mari Moura',
    })
    );
  }
  
}
);

server.listen(8000, () => console.log("RODOUUUUU"));