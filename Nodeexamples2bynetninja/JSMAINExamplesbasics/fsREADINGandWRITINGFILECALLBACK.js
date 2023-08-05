

const fs = require('fs')    /// == ES6 module import looks like , -     import fs from 'fs';   

/*
fs.readFile('./styles.css',  (err, data) => {   // fs module to read file - pass in the path and a callback function. 
    if(err) { 
        console.log(err)
    }
    console.log(data)

} )

//// when we read the code above , we will get a buffer of data that is a series of hexidecimal values in the console , 
// like <Buffer 62 6f 64 79 20 7b 20 0d 0a 20 20 20 62 61 63 6b 67 72 6f 75 6e 64 2d 63 6f 6c 6f 72 3a 20 23 46 30 46 30 46 30 3b 20 0d 0a 7d 20 0d 0a 62 6f 64 79 20 ... 37 more bytes> 



*/

/*               
READING THE CSS FILE , and displaying it to the console 
*/
/*
const fs = require('fs')    /// == ES6 module import looks like , -     import fs from 'fs';   


fs.readFile('./styles.css',  (err, data) => {   // fs module to read file - pass in the path and a callback function. 
    if(err) { 
        console.log(err)
    }


    console.log(data.toJSON());  // this will log the data in a JSON format, which is an array
    console.log(data.toString("utf8")); //This is very important , this is displaying the 
                // css as a string in the console !   

} ); 

console.log( "Merr ")

*/

// WRITING A FILE , AND WRITING TEXT INSIDE THE FILE.    

fs.writeFile('./newtextmessage.txt', 
" rewritten text " , () =>{ 
    console.log("file was written. ")
} )








