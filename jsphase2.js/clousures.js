/* Here You Are learning about Closures, 
   Before that Know what is lexical scope? in js
   Lexical scope is the ability for a function scope to access 
   variables from the parent scope. We call the child function to be lexically bound by that of the parent function. */
/*-----------------Now understand Closures-----------------*/
/*closure is a feature that allows inner functions (child)
to access the outer scope(parent) of a function. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.*/

function x(){
    var a=9;                 //9 is just a value assigned to a memory always points to its referecnce
    
    function y(){
        console.log(a);
    }
    var a=100;              // when you invoke z() it will point to memomry reference of a not value assigned 
   return y;   
}
var z=x();
console.log(z);
//..........1000 line code
z();
