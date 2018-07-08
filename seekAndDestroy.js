//Solution 1 - using filter and slice methods
function destroyer(arr) {
  //Get an array the values to remove by slicing the beginning
  let removeValues = Array.from(arguments).slice(1);

  //Using the filter function in order to remove the values common among both arrays
  let filteredArr = arr.filter((value) => {
    return !removeValues.includes(value);
  });

  return filteredArr;
}

//Solution 2 - Logically equivilent to solution 1 but without slice method
// function destroyer(arr) {
//   //Create an array to gold the values to remove
//   let removeValues = [];
//
//     //Use a for loop to push the values to remove to the removeValues array
//     for(let i = 1; i < arguments.length; i++){
//       removeValues.push(arguments[i])
//     }
//
//
//   //Using the filter function in order to remove the values common among both arrays
//   let filteredArr = arr.filter((value) => {
//     return !removeValues.includes(value);
//   });
//
//   return filteredArr;
// }

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
