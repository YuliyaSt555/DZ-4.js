"use strict"
{
  let arr = [];
let numbers = true;
let sum = 0;

while(numbers){
    let num = prompt('Введите число');
    if(num === '') {
        numbers = false;
    } else if(num === null){
        numbers = false;
    } else {
        arr.push(Number(num));
    }

}
console.log(arr);
arr.sort(function(a, b) {
    return a-b;
});
console.log(arr);
}