
/*   this is a  HTTP request to google.com 
 
this response , , responds the status code , 
 the response headers , 
 and then the data as a chunk. The data comes in hexidecimal 
 as this when logged to the console. 
*/


const http = require('http');


const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/',
};

const request = http.request(options, (res) => {
  console.log(res.statusCode);
  console.log(res.headers);
  res.on('data', (chunk) => {
    console.log(chunk);

    const binary = unhexlify(chunk);

    console.log(binary);
  });
});

request.end();