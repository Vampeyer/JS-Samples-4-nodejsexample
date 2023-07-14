console.log('hello world')

var x = 2; 
x += 2000
console.log(x)

global.num = '99' 

console.log(global.num); 




process.on ('exit', function()  { 

    console.log('exited function')

} )


/////
////importing the event emitter that is built into node. 


/// creating a cuarom event emmitter , 
// by instantiating a custom event emitter class .  

const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter
 
eventEmitter.on('lunch', () =>  { 
    console.log (' I really really hate custom event emmitters ,  and I absolutely do not unerstand why you would instantiate a class.. .')
}   )

// then emit it as such. 
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');