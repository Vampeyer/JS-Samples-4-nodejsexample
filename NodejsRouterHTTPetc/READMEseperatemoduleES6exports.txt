in the two files , 
seperatemodule.js 

and 

seperatemoduleExports.js , 

when being used in a node app or a node server , 
in the ES6 JavaScript modules , 

one can export certain code , by in the file and code to 
be exported , to be a  
module.exports = {}  
object , with module.exports , 

and the importing file to have , 


a 
{ Declared variable}{ that is}{ a require function , to import the module or code. , followed by the path of the file} 
                    {set to } 
        const myModule =  require('./seperatemoduleExports')

-----All of the code that is set to module.exports , will be exported 
- as the variable it is declared in the other importing file. 

In this case , this is the -  myModule variable . 


console.log(myModule)  , too see the module in the imported file , 
by running the imported file in a node server. 




==========================================
Using express continued 




The reason why you are not retrieving the index.html file in your root folder with the code you provided
 is because you are not using the express.static() middleware. The express.static() middleware allows you to 
 serve static files from your application.

To use the express.static() middleware, you need to add it to your application's middleware stack. 
You can do this by calling the use() method on your application's instance of the express object.

For example, the following code will use the express.static() middleware to serve static files 
from the /public directory:
----------------------------------------------------
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(3000);


----------------------------------------------------------------------
This code will serve the index.html file from the /public directory when a user visits the root URL of your application.

In your code, you are trying to read the index.html file directly from the file system. This will not work because the express framework does not know where to look for the file.

If you add the express.static() middleware to your application, the express framework will know where to look for the index.html file and will serve it to the user when they visit the root URL of your application.

I hope this helps! Let me know if you have any other questions.