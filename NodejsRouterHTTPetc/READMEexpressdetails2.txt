here is the code rewritten without using async or await:


const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('public'));

app.get('/', (request, response) => {
  const html = fs.readFileSync('/index.html', 'utf8');
  response.send(html);
});

app.listen(process.env.PORT || 3000, () => console.log('Server available on http://localhost:3000'));


Use code with caution. Learn more
This code uses callbacks to handle the asynchronous operations. The readFileSync() method blocks the execution of the code until the file is read, so we need to use a callback to be notified when the file is ready. The callback function is passed the contents of the file as a string, which we can then use to send the response to the client.

Here is a breakdown of how the code works:

The app.get() method listens for requests on the / path.
When a request is received, the readFileSync() method is called to read the file /index.html.
The callback function is called when the file is read. The callback function takes the contents of the file as a string.
The contents of the file are sent to the client.
This code is a bit more verbose than the version that uses async and await, but it is still perfectly valid JavaScript.