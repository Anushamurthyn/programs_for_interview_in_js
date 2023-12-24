//prog to print 
/*
*
**
***
****
*****
******
*********   */
var n = 5;
var right = " ";
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    right += "* ";
  }
  right += "\n";
}
console.log(right);


