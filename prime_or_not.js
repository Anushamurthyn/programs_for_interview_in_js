//prog to check prime or not
var num=prompt('Enter the number')
count=0

for(var i=0; i<num; i++){
    if(num%i==0){
        count++
    }
}
if(count==2){
    console.log(num +'prime')
}else{
    console.log(num +'not a prime')
}