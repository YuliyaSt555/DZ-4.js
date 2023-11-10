"use strict"
{
  let arr = [5, 9, 21, , , 9, 78, , , , 6];
  let num = 0;
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == null) {
          num++;
      } else {
          continue;
      }
  }
  console.log(num);
}