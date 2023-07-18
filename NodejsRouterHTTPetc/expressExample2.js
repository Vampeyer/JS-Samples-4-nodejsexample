const express = require('express');
const fs = require('fs'); 
const { readFile } = require('fs').promises;


const app = express();
app.use(express.static('public'));




console.log(readFile);

app.get('/', async (request, response) => {

 const html = await readFile('./index.html', 'utf8' )
   
      response.send(html);
    });


app.listen(process.env.PORT || 3000, () => console.log( " Server available on http://localhost:3000 ")); 