// function add(a,b){
//     sum = a + b;
// }
// add(10,20);
// console.log(sum);


//arrow functions
// const addNum= (a,b)=> a+b;
// console.log(addNum(1,2))

// let sayHi = () =>alert('yo!')
// sayHi();

// let double = n=> n*2;
// console.log(double(5))
function ask(question, yes, no){
    if(confirm(question)) yes();
    else no();
}
ask(
    "Do agree?",
    ()=>alert("you agreed"),
    ()=>alert("you cancled the execution")
);