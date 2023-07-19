const xyz = require('./EXPORTS1modules')         /// using require function too import locally from the path && file. 

console.log(xyz);

console.log(xyz.people[1])

//console.log(people, ages)



const os = require('os');     ///  BUILT IN NODE OS MODULE !!!!!! 

console.log(os.arch()   
            + os.cpus()  + "                       "  + 
            os.freemem() + "                       "  + 
            os.machine() + "                       " + 
            os.networkInterfaces() + "                " + 
            os.hostname() + "                          " + 
            os.homedir() +  "                             " + 
          os.version()  )