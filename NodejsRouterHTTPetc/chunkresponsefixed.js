


/*  
I got an error in this line of code , 

const binary = binascii.unhexlify(chunk); 

how should i fix this ? 
View other drafts

















The error you are getting is because the chunk variable is not a hexadecimal string. The chunk variable is a string, but it is not a hexadecimal string. To fix this error, you need to convert the chunk variable into a hexadecimal string.

You can do this by using the hex() method of the String object. The hex() method will convert a string into a hexadecimal string.

Here is the fixed code:



const binascii = require('binascii');

const chunk = '48656c6c6f20776f726c64';
const hexChunk = chunk.hex();
const binary = binascii.unhexlify(hexChunk);

console.log(binary);


/*
This code will convert the string chunk into a hexadecimal string, and then it will use the binascii.unhexlify() function to decode the hexadecimal string into a binary string.

I hope this helps! Let me know if you have any other questions.
*/











/*   this is a  HTTP request to google.com 
 
this response , , responds the status code , 
 the response headers , 
 and then the data as a chunk. The data comes in hexidecimal 
 as this when logged to the console. 
*/


const http = require('http');
const binascii = require('binascii');



const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/',
};

const request = http.request(options, (res) => {
  console.log(res.statusCode);
  console.log(res.headers);
  res.on('data', (chunk) => {
    

    console.log( " - Original Chunk of Data -    ")
    console.log(chunk);
   
    const hexChunk = chunk.toString('hex');
    console.log( "chunk is now a hex value and is ---  " +  hexChunk); 

    const binary = binascii.unhexlify(hexChunk);
    
    console.log( " binascii binari asci tell me ?  =  " + binary )

    const text = binary.toString('utf-8');
    
    console.log(text);

  });
});

request.end();