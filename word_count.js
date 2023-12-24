str = "pro programmer"
strl=str.length
count=0
check= false;
for(var i=0; i<strl ; i++){
    if(str[i] !==' ' & !check){
        count++
        check = true
    }else if(str[i]==" " || str[i]=="/n" || str[i]=="/t")
    check=false
}
console.log('word count',count)
