"use strict"
{
    let arr = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];

    let firstNull = arr.indexOf(0);
    let secondNull = arr.lastIndexOf(0);
    let sum = 0;

for (let i = firstNull; i <= secondNull; i++) {
    sum += arr[i];
}

if (firstNull == -1 && secondNull == -1) sum = 0;

console.log(sum);

    
}
