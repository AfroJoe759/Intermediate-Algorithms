//Solution 1
function dropElements(arr, func) {
  while (!func(arr[0])) {
    arr.shift()
  }
  return arr;
}

//Solution 2
// function dropElements(arr, func) {
//   let size = arr.length
//   for(let i = 0; i < size; i++){
//     if(!func(arr[0])){
//       arr.shift();
//     }
//
//     else{
//       break;
//     }
//   }
//   console.log(arr);
//   return arr;
// }

dropElements([1, 2, 3], function(n) {
  return n < 3;
});
