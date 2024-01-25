let string1= 'computer';
let arr = string1.split('');

l = arr.length;
let isUnique = true;


for(let i=0; i<l; i++){
    for(let j=0; j>l-1; j--){
        if(arr[i]===arr[j]){
            isUnique = false;
            break;
        }
    }
}
if (isUnique) {
    console.log('The string has unique characters.');
} else {
    console.log('The string has duplicate characters.');
}