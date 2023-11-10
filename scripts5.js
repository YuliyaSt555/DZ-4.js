"use strict"
{
    let arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    for(let i = 0; i < arr.length; i++){
        if (i >= (arrWeek.length-2)) {
            document.write(arr[i].bold() + ' ');
        }
        else{
            document.write(arr[i] + '');
        }
    }
    
}