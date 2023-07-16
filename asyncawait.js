


const { EventEmitter } = require('events') 

async function emitThePizza() { 

 const eventEmitter = await  new EventEmitter();

eventEmitter.on('pizza', () => {        
    console.log('emitted the pizza to ya ')
 });

eventEmitter.emit('pizza');

}
 
emitThePizza(); 
