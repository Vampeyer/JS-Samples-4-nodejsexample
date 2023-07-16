const { readFile } = require('fs').promises;

async function reading() {
  const file = await readFile('./hello3.txt', 'utf8');
  console.log(file);
}

reading();