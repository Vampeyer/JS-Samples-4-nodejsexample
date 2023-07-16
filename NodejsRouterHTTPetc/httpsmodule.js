const https = require('https');

const options = {
  host: 'www.example.com',
  port: 443,
  path: '/',
};

const request = https.request(options);

request.on('response', (response) => {
  console.log(response.statusCode);
  console.log(response.headers);
});

request.end();