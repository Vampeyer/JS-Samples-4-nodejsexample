
/*     */


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
  });
});

request.end();