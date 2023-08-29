
/// This is an example of a server , that is listening for requests on a website. 

// This is how your computer as a localhost , by using a loopback 
const http = require('http'); 
const fs = require('fs');

const server = http.createServer((req, res) => { 
/*
console.log(req)         /// accesses a request -- eventually  
                         /// below makes details on the req 
console.log(req.url + req.method )
console.log("server Request has been made") */  
console.log(req.url, req.method); 
console.log("  request method ")



// set header content type 
res.setHeader('Content-Type', 'text/html');
/*
res.write( " Hello ninja !  ")
res.write(" <p> Hello paragraph tag !   </p>") */

fs.readFile('simplesample.html', (err, data) => { 
if(err) { 
    console.log(err)
    res.end();
} else { 
    res.write(data) 
    res.end()
}

})
})
 /// then we end the response , which sends it to the browser . 



                                 //// Listening on the port 3000
server.listen(3000,'localhost',  () => { 
    console.log("listening   for requests on http://localhost:3000")
})  

