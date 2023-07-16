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
    
    
    
    }, 6000); 
    
    setTimeout(() => {
        console.log(response.thirdResponse) 
    }, 10000);
  
    
    setTimeout(() => {
        console.log(response.fourthResponse) 
    }, 14000);
    
    setTimeout(() => {
        console.log(response.fifthResponse) 
    }, 18000);
    


    setTimeout(() => {
      console.log(response.sixthResponse) 
      
  }, 22000);
   
})
eventemitter2.emit('emissionstakeoff!!!'); 
  

 






/*  Rocketship has taken off ,  
time to track its placement and engine controls !     */ 
 
const eventemitter3 = new EventEmitter();

eventemitter3.on('emissionstakeoff!!!', () => { 
   
 
  let response = { 
   firstResponse2: " Requesting process data from orbital ", 
   secondResponse2: "Waiting.....", 
   thirdResponse2 :   " Process Environment Display" , 
   fourthResponse2 : "  Starting diagnostics , and CPU report ...  " , 
   fifthResponse2 :  "System health basic report.   ",
   sixthResponse2 : " Shutting down diagnostic systems , reverting too system control... " ,
   seventhResponse2: " System  check complete.  Proceed to mapping coordinantes for auto-pilot .... Over and out. "  
   }  
   
  
   
   setTimeout(() => {
     console.log(response.firstResponse2)  
     console.log(' Running mission diagnostics ') 
     eventemitter3.removeAllListeners(response.firstResponse2)

   }, 26000);
    
   
   
   setTimeout(() => {
       console.log(response.secondResponse2) 
   
   
   
   }, 30000); 
   
   setTimeout(() => {
       console.log(response.thirdResponse2) 

       console.log(process.env)

   }, 34000);
  
   
   setTimeout(() => {
       console.log(response.fourthResponse2) 

   

   }, 38000);
   
   setTimeout(() => {
       console.log(response.fifthResponse2) 
       console.log (process.cpuUsage()) 

   }, 42000);
   


   setTimeout(() => {
     console.log(response.sixthResponse2) 
     
 }, 46000);

 setTimeout(() => {
  console.log(response.seventhResponse2) 
  
}, 50000);



                                // sorry for so many numbers in variable names , Its for visibility !  
})
eventemitter3.emit('emissionstakeoff!!!'); 
 
