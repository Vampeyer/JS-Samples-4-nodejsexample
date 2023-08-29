
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
    