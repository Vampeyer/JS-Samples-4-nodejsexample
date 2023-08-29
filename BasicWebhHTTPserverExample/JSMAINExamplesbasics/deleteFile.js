const fs = require('fs'); 

if(fs.existsSync( './newtextmessage.txt' )) { 
    fs.unlink('./newtextmessage.txt' , (err) => { 
        console.log('deleted')

        if ( err) { 
            console.log(err);
        }
    } )
}