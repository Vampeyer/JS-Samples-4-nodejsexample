/*    READING AND WRITING AND ETC. SAVASCRIPT WITH THE FS NODE MODULE.   
this is a package used to display the code needed to read and write files , with a 
few promise and async / await methods.   - this is for reference anc copying later. 

*/ 

/*   */  


const {  readFileSync, writeFile,  } = require('fs');

const reading = readFileSync('./hello.txt', 'utf-8');

console.log(reading)
console.log(" Simple end of file. But it is ran first , because the readFile uses a call back which waits for a result , before continuing.  ")


/////////////////////////////////
/*  using a callback function , as the third argument. 
 for reading a file , using readFile   */  


readFile('./hello2.txt', 'utf-8', ( err, txt ) => { 
 console.log(txt)
}  )



/*  reading files using promises , and Async Await  */

const { readFile } = require('fs').promises;

async function reading() {
  const file = await readFile('./hello3.txt', 'utf8');
  console.log(file);
}

reading();



const writetofile = writeFile('./newText.txt', 'utf8')   