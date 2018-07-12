//Solution 1 - Recursive
function steamrollArray(arr) {
  let flattenedArray = [];
  flattenedArray = flattenedArray.concat(...arr);

    for(let i = 0; i < flattenedArray.length; i++){
      if(Array.isArray(flattenedArray[i])){
        return steamrollArray(flattenedArray);
      }
    }

   return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
