//// VERY IMPORTANT 


/// READING FILES WITH A STREAM < FOR BETTER OPTIMIZATION !!!!!   
/// STREAM LOADING reaDS LARGE FILES BEFRORE THEY ARE COMPLETELY LOADED!


const fs = require('fs');   

const readStream = fs.createReadStream('./streamofchunkoftext.txt');

readStream.on('data',  (chunk) => { 
    console.log("---New Chunk ! ----" );
    console.log(chunk);     /// This reads a stream , of a chunk of data !  , coming from the text above , it will apear
                                 // in hex , in the console.  

    console.log(chunk.toJSON())
    console.log(chunk.toLocaleString()) 
    console.log(chunk.toString())

console.log(process.hrtime());

} ); 
 
