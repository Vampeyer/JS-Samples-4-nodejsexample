

/* 
NPM stands for Node Package Manager and is the package manager used , 
when working in a node.js environment / node server environment. 

Express is a popular third party NPM module , that easily allows common HTTP 
requests such as GET and POST in a module 

to first use Express in Node it has to be installed , such as 

--- npm install express  ---   in the terminal , in this root directory. 

--- If node is properly installed , this will install express and add it to the package.json as 
a dependency , 

Express must be then , imported into the file for use , using a require statement , 
as such  - 
*/

const express = require('express');      //  IMPORTING THE EXPRESS MODULE FOR USE 
const fs = require('fs');
const { readFile } = require('fs').promises;

console.log(readFile());

const app = express();                                         // DECLARING THE APP VARIABLE AS THE EXPRESS FUNCTION.
app.use(express.static('public'));   // Very important , 
                     // this is the express.static() middleware , that serves the file locally , in the router. It is needed to host locally. 
                                  // This may need to be changed depending pn where or how the file is hosted. 

app.get('./', (request, response) => {  // app.get() will set up  the endpoint.(first argument , second argument )
                                           // the first argument is the url that the user will navigate to  - like root ./                
                                         // the second is a callback function. 
  
                                          // here we are going to read and send data as we have done before.
    readFile('./index.html', 'utf8', (err, html) => { 
           
          
        if(err) { 
            response.status(500).send("Server Error. ")    //response.send  ---  sends the request to the html,  and will send the data in this condition .  // calls a status response back if the err value is true , or their was an error . 
             
        }   else {                                               
        response.send(html); }         //response.send  ---  sends the request to the html,  and will send the data in this condition . 

    } )    
});     

// EXPRESS GIVES US TWP PARAMETERS TO WORK IN , THE REQUEST AND RESPONSE. 


app.listen(console.log( ' Successfully ran ' ))

app.listen(process.env.PORT || 3000, () => console.log( " Server available on http://localhost:3000 ")); 
//app.listen(3001)     /// making sure it is listening on 3001 as a backup 



//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/*     Broken Express Server Example     */  
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

/*
the above code is using the readFile() method / function , and needs to 
read the file located in the desired path. 

But , the code can NOT execute at runtime , to both read 
and as well display the file. By the time the code gets to display the file , the file has not been read ! 
and 
Can not be displayed !  


---- To fix this , one may use a call back method , such as a async / await method   

 demonstrations are in expressExample2.js
 and 
 expressExample.js 


*/ 