
Making a request too google.com usign the built in http node  module.



 const http = require('http');

const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/',
};

const request = http.request(options, (res) => {          --- http callback response , and callback initiation - 
  console.log('Status code: ' + res.statusCode);                       -- response status code , like  404 or 302 / 303 
  console.log('Headers: ' + JSON.stringify(res.headers));             -- header response displaay object  -  being turned into a string using JSON stringify 
  res.on('data', (chunk) => {
    const binary = binascii.unhexlify(chunk);
    const text = binary.toString('utf-8');                                   -- taking the response , and turning the chunk of the response directly into utf8 
    console.log(text);
  });
});

request.end();
This code will make a GET request to the Google homepage and log the response status code, headers, and data as a text in the console.

The unhexlify() function from the binascii module will decode the hexadecimal string into a binary string. The toString() method of the Buffer object will then convert the binary string into a string.

The JSON.stringify() function will convert the headers object into a JSON string. This will allow us to log the headers in a more readable format.




--------------------------------
binascii module , - 


where doi get the binascii module ?

The binascii module is available on the npm package registry. You can install it by running the following command in your terminal:

 installation code in terminal :
 -  npm install binascii
Once you have installed the binascii module, you can import it into your Node.js application by using the following code:

-   const binascii = require('binascii');
You can then use the binascii module to convert between binary and hexadecimal strings.

Here is a link to the binascii module documentation: https://www.npmjs.com/package/binascii.

I hope this helps! Let me know if you have any other questions.
-------------------