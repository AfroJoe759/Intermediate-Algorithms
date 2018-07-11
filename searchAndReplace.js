//Solution 1
function myReplace(str, before, after) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === before) {
      if (arr[i].charCodeAt(0) <= 90) {
        arr[i] = after.charAt(0).toUpperCase() + after.substr(1);
      } else {
        arr[i] = after.charAt(0).toLowerCase() + after.substr(1);
      }
    }
  }
  return arr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
