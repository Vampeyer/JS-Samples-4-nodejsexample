
/// This is an example of a server , that is listening for requests on a website. 

// This is how your computer as a localhost , by using a loopback

// servers some text in a text format to the browser after A Few seconds in the terminal. 


const http = require('http'); 
const fs = require('fs');

const server = http.createServer((req, res) => { 

console.log(req)         /// accesses a request -- eventually  
                         /// below makes details on the req 
console.log(req.url + req.method )
console.log("server Request has been made") 
console.log(req.url, req.method); 
console.log("  request method ")



// set header content type 
res.setHeader('Content-Type', 'text/plain'); 
res.write( " Hello ninja !  ")
res.write(" <p> Hello paragraph tag !   </p>")
res.end();  /// then we end the response , which sends it to the browser . 

});


                                 //// Listening on the port 3000
server.listen(3000,'localhost',  () => { 
    console.log("listening   for requests on localhost:3000")
})

