//simple calculator
const num1=parseInt(prompt('Enter a number'))
const num2=parseInt(prompt('Enter a number'))

function add(num1,num2){
    sum=num1+num2
    return sum
}
add()
function subtract(num1,num2){
    sub=num1-num2
    return sub
}
subtract()
function multiply(num1,num2){
    mul=num1*num2
    return mul
}
multiply()
function divide(num1,num2){
    div=num1/num2
    return div
}
divide()
console.log('Sum:', add(num1, num2));
console.log('Difference:', subtract(num1, num2));
console.log('Product:', multiply(num1, num2));
console.log('Quotient:', divide(num1, num2));