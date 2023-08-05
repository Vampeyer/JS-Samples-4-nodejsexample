const http = require('http');     

const server = http.createServer((req, res) => {                
    console.log("server Request has been made");

    console.log(req.url, req.method);

    
    res.setHeader('Content-Type', 'text/html');
    res.write('/./index.html');
    res.end();
});

server.listen(3000,'localhost', function() {             
    console.log("listening for requests on https://localhost:3000");
});