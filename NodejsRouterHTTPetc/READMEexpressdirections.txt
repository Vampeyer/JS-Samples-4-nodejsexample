
Express middleware and routing ----                  -- With Node installed , via NPM. 
 ---------                                         

When using Express , to be a server or host a file locally , 
or provide middleware , first  , 
to use any of the modules , you need to install express via NPM. 
in the terminal type  -

npm install express

You will now be able to see express as a dependancy 
in your package.json folder. 


------------------------------------------------------
for simply setting your port to listen on , if desired. 
--

Create a file called .env in the root directory of your Node application.
In the .env file, add the following line:
PORT=3000
Save the .env file.
In your Node application, you can access the environment variable by using the process.env.PORT property.
For example, the following code will print the value of the PORT environment variable to the console:

console.log(process.env.PORT);
The output of the code will be the port number that your Node application is listening on.

Here is an example of how you can use the PORT environment variable to set the port number that your Node application listens on:

const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.send('Hello world!');
});

server.listen(port);
This code will listen on port 3000 if the PORT environment variable is not set.
 If the PORT environment variable is set, the code will listen on the port number 
 that is specified in the environment variable.


------ 
Express middleware and 
routing , in Node.                            -  Very important !  



-------------
Then install fs , on NPM in terminal. - 
to be able to read files locally. 

---------------

There are a few things you can do to make sure that the fs module is
 imported and you can use the readFile() function.

First, make sure that the fs module is installed. 
You can do this by running the following command in your terminal:

npm install fs
Once the fs module is installed, make sure that it is imported in your code. You can do this by adding the following line to the top of your code:

const fs = require('fs');
If you have already added the fs module to your code and you are still getting an error, make sure that the file that you are trying to read is actually present in the file system. You can do this by checking the file path that you are passing to the readFile() function.

If you have checked all of these things and you are still getting an error, it is possible that there is a problem with your Node.js installation. You can try reinstalling Node.js to see if that fixes the problem.