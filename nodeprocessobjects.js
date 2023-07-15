
/*

 / * console logging the p.c. details.  */




console.log(process.env);


console.log(process.stdin);
console.log(process.stdout);   


/* manipulating stuff in the process in node  , IDK what i did  here , but I did something.   */

console.log(process.stdin.isRaw = true);
process.stdin._destroy = true;

/*  Logs  out the cpuDisplay usage   */ 

console.log(process.cpuUsage())