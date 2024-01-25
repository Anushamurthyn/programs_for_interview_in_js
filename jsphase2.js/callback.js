// What are Callback Functions in JavaScript?
//passing function as a parameter to another function, and giving the responsiblity of passed function(callback func) to the main func or the first func i.e when and where to be excuted to the  main function
setTimeout(function(){         //as soon as js engine sees settime out a timer is attached to that and kept aside 
    console.log('timer off');
}, 5000);
function x(y){         
    console.log("x")
    y();
}
x(function y(){   //function x( ) is called goes and exutes func x
    console.log("y")  //passing fucn y as a parameter to func x
});