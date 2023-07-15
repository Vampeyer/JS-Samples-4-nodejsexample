/*
process.on('exit', function(){  
// does something during here , before calling the function 
} )  


/// Now making a custom event emmitter and emitting an event. 
/*  import event emmitter and then  
  */ /*

const  {EventEmitter} = require('events') 
const eventEmitter = new EventEmitter(); 

 
eventEmitter.on('lunch', () => { 
  console.log("emitted , with an arrow function")
})
eventEmitter.emit('lunch')
eventEmitter.emit('lunch')
eventEmitter.emit('lunch')
eventEmitter.emit('lunch')



let newfunction = function() { 

 console.log ('emitted function complete')
}
newfunction();

*/







/// Emit a new rocketship flame  - go 
 


const  {EventEmitter} = require('events') 
const eventemitter2 = new EventEmitter();

eventemitter2.on('emissionstakeoff!!!', () => { 
   console.log(' Countdown to take off started  ! ')  
  
   
   

  
})
eventemitter2.emit('emissionstakeoff!!!'); 
  

 



