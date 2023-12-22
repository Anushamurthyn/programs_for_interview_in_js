//prog to rev a num
var num=123456
var rev=''
var numRev=num.toString()
for(var i=numRev.length-1; i>=0; i--){
    rev=rev + numRev[i]

}
console.log(rev)