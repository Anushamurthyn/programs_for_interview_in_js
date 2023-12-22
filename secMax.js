/*
//prog to find second largest number in JavaScript
//Method1
var arr = [55, 23, 69, 78, 44];
var firstMax = 0;
var secMax = 0;

for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

// The second-to-last element is the second maximum
firstMax = arr[arr.length - 1];
secMax = arr[arr.length - 2];

console.log('firstMax', firstMax);
console.log('secMax', secMax);
*/
//Method2
var arr=[45,66,89,71]
function findSecondLargest(arr) {
    var first = arr[0];
    var second = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > first) {
        second = first;
        first = arr[i];
      } else if (arr[i] > second) {
        second = arr[i];
      }
    }
    return second;
  }
 var secMax = findSecondLargest(arr)
 console.log('secMax', secMax)
