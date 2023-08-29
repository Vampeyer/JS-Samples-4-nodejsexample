console.log("Hello, World!"); 

console.log("Its nice to meet you ,  ")

const greeting = " Helooooooo there "

const greet = (greeting) => { 
     console.log(" what is your name? "); 
     console.log('greetings there '  + `${greeting}`)  
}


greet('billy bob'); 
greet(' where did you come from where did you go  ? ');

greet('where did you come from cotton eyed joe ? ');

setInterval ( () => { 

    console.log( " Where did you come from ? ") 
} , 3000 )
setInterval ( () => { 

    console.log( " Where did you go ? ") 
} , 5000 )

setInterval ( () => { 

    console.log( " Where did you come from cotton eyed joe   ? ") 
} , 7000 )