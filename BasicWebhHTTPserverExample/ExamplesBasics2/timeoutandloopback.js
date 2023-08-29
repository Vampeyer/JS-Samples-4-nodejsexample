

var int1 = 100
var int2 = 2000
var int3 = 10000

const timeoutFunc = function(){


  /////

  /// This is a series of code , that will
  /*   
  -start code after a certain number of times 

  -loop through the code for a period of time , 

  - and then stop after ten seconds.  
  */

    setTimeout(() => {

    let timeout = setInterval( () => { 
            console.log("Logging")
       



        for(let i = 1;i < 100; i++ ) { 
            console.log(i)
        }
    },100 )


        setTimeout(() => {
            clearInterval(timeout)

        },500);

    
    },200);     
    clearTimeout(int3)


} 


    timeoutFunc(); 





 

















/*



var i = 1
setInterval(() => {
   
    i++
    console.log(i)/*  */