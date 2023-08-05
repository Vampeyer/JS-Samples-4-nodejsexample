
// importing the fs module from the navtive node app . 
const fs = require('fs'); 


/*
// CREATING A FILE 
// WRITING A FILE , AND WRITING TEXT INSIDE THE FILE.    


fs.writeFile('./newtextmessage.txt', 
" rewritten text " , () =>{ 
    console.log("file was written. ")
} )

//---------------------------------------------------------


*/



// CREATING A FOLDER , OR DIRECTORY 

/*
fs.mkdir('./newfolder', (err) => { 

if(err){
    console.log(err)}
console.log("folder created")
})  
*/

////////////////////////////////////////////////////////////
//// checking if the folder is there ,  with fs.existsSync() 





// CREATING A FOLDER , OR DIRECTORY 
// that switches , with an else statement , to delete and 
//  remove the directory


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




// DELETING A FILE  
// making sure a file exist's , when it deletes




if(fs.existsSync( './newtextmessage.txt' )) { 
    fs.unlink('./newtextmessage.txt' , (err) => { 
        console.log('deleted')

        if ( err) { 
            console.log(err);
        }
    } )
}




