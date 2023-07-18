
// Express local host server , 
// without using async / await , 

// instead this blocs the read file sync , because 
// readFileSync is a Sync , and that means bloaking. 


const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('public'));

app.get('/', (request, response) => {
  const html = fs.readFileSync('./index.html', 'utf8');
  response.send(html);
});

app.listen(process.env.PORT || 3000, () => console.log('Server available on http://localhost:3000'));
