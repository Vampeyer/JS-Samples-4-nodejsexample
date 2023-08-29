
// importing the fs module from the navtive node app . 
const fs = require('fs'); 


// CREATING A FILE 
// WRITING A FILE , AND WRITING TEXT INSIDE THE FILE.    
/*

fs.writeFile('./newtextmessage.txt', 
" rewritten text " , () =>{ 
    console.log("file was written. ")
} )
*/
//---------------------------------------------------------






// CREATING A FOLDER , OR DIRECTORY 

/*     ////// creating a folder ,,,, basic code - 

fs.mkdir('./newfolder', (err) => { 

if(err){
    console.log(err)}
console.log("folder created")             
})                                        //// NOTE  //// --- IF THE FILE EXISTS , THE CODE ABOVE WILL THROW AN ERROR !  -- SEE OTHER folder creation code ! 
 
*/

/////// CREATING A FOLDER USABLE CODE !  

if (!fs.existsSync('./newfolder'))  {    /// CREATES a FOLDER , IF ITS NOT ALREADY THERE.         ///       , if it is  not already present , in the , callback  sync .
    fs.mkdir('./newfolder', (err) => { 
        console.log(err)
    }); }                                        
    


////////////////////////////////////////////////////////////
//// checking if the folder is there ,  with fs.existsSync() 





// CREATING A FOLDER , OR DIRECTORY 
// that switches , with an else statement , to delete and 
//  remove the directory

/*

if (!fs.existsSync('./newfolder'))  { 
fs.mkdir('./newfolder', (err) => { 

if(err){
    console.log(err)}
console.log("folder created")
})  } else { 
 fs.rmdir("./newfolder", (err) => { 
    if(err){
    console.log(err);} 
    console.log('folder deleted')
 } )
} 

*/