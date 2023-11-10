"use strict"

{
    let arr = ['10', '20', '30', '50', '235', '3000'];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let element = num[0];
        if (element == 1 || element == 2 || element == 5) {
            console.log(num);
}
    }
}