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
  
   let response = { 
    firstResponse: " Five....", 
    secondResponse: "Four.....", 
    thirdResponse : " Three ... ", 
    fourthResponse : "  Two.... ", 
    fifthResponse : "     One!  ", 
    sixthResponse : "         .... LIFTOFF!!!!   "
    }  
    
    
    setTimeout(() => {
      console.log(response.firstResponse)  
    }, 2000);
     
    
    
    setTimeout(() => {
        console.log(response.secondResponse) 
    
    
    
    }, 4000); 
    
    setTimeout(() => {
        console.log(response.thirdResponse) 
    }, 6000);
    setTimeout.prototype._destroy;
    
    setTimeout(() => {
        console.log(response.fourthResponse) 
    }, 8000);
    
    setTimeout(() => {
        console.log(response.fifthResponse) 
    }, 10000);
    


    setTimeout(() => {
      console.log(response.sixthResponse) 
      
  }, 12000);
   
})
eventemitter2.emit('emissionstakeoff!!!'); 
  

 






/*  Rocketship has taken off ,  
time to track its placement and engine controls !     */ 
 


eventemitter3.on('emissionstakeoff!!!', () => { 
  console.log(' Countdown to take off started  ! ')  
 
  let response = { 
   firstResponse2: " Five....", 
   secondResponse2: "Four.....", 
   thirdResponse2 : " Three ... ", 
   fourthResponse2 : "  Two.... ", 
   fifthResponse2 : "     One!  ", 
   sixthResponse2 : "         .... LIFTOFF!!!!   " ,
   seventhResponse2: process.cpuUsage()  
   }  
   
   
   setTimeout(() => {
     console.log(response.firstResponse2)  
   }, 2000);
    
   
   
   setTimeout(() => {
       console.log(response.secondResponse2) 
   
   
   
   }, 14000); 
   
   setTimeout(() => {
       console.log(response.thirdResponse2) 
   }, 16000);
   setTimeout.prototype._destroy;
   
   setTimeout(() => {
       console.log(response.fourthResponse2) 
   }, 18000);
   
   setTimeout(() => {
       console.log(response.fifthResponse2) 
   }, 20000);
   


   setTimeout(() => {
     console.log(response.sixthResponse2) 
     
 }, 21000);
                                // sorry for so many numbers in variable names , Its for visibility !  
})
eventemitter3.emit('emissionstakeoff!!!'); 
 
