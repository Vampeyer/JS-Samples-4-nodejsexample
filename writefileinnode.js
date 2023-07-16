const fs = require('fs');

var content = 'This is some content that I want to write to a file.';

const contentTwo = "content two "
const writeFile = async () => {
  try {
    await fs.writeFile('./my-file.txt', content, ( err, content ) => {         
        
        
        const writeSecondFile = async () => {
        await fs.writeFile('./myFile#2.txt', contentTwo, (err, contentTwo) => 
        {   
            var content = 'This is some content that I want to write to a file.';
            console.log("Successfully wrote" +  content + " to the console. ")
        } )} ;  writeSecondFile();
    
       
    });

    console.log('File written successfully! the content :  '   + contentTwo + "    Was written in the file !  " );
  } catch (err) {
    console.log('Error writing file:', err);
  }
};

writeFile();