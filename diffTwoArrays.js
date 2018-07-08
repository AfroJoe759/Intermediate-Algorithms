//Solution 1 - using filter and concat methods
function diffArray(arr1, arr2) {
  let newArr = arr1
    .filter(item => !arr2.includes(item))
    .concat(
      arr2.filter(item => !arr1.includes(item))
    )

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
