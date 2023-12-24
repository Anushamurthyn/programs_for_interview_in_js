num = parseInt(prompt('Enter the number'))
function palindromeOrnot(num){
    let originalNum = num
    rev =0
    while(num!==0){
        rem=num %10
        rev = rev*10+rem
        num=parseInt(num/10)

    }
    if(originalNum===rev){
        console.log('palindrme', +originalNum)
    }else{
        console.log('not a palindrme', +originalNum)
    }
}
palindromeOrnot(num)