// //The possible ways to create object
// //Object literal syntax:
// var object ={
//     name : "anusha",
//     age: 22
// };
// console.log(`${this.object.name}`)
// //object constructor
// var object = new object(); //obj is a built in constructor need not use new
// //using create method
// var object = Object.create(null)
// //func constructor
// function person(name1){
//     this.name1= name1;
//     this.agee= 16;

// }
// var object = new person('amith');
// console.log(person)
//Function constructor with prototype:
function Person(){
    Person.prototype.name ="joe";
    var object = new person();
}
console.log(Object.getPrototypeOf(this.name))
