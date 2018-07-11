//Solution 1
function uniteUnique(arr) {
  let sortedUnion = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (!sortedUnion.includes(arguments[i][j])) {
        sortedUnion.push(arguments[i][j])
      }
    }
  }
  return sortedUnion;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
