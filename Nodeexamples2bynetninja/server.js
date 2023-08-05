const http = require('http');     

const server = http.createServer((req, res) => {                
    console.log("server Request has been made");
    console.log(req.url, req.method);
    console.log(req);
    req.on  

    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello World');
    res.end();
});

server.listen(3000,'localhost', () => {             
    console.log("listening for requests on https://localhost:3000");
});