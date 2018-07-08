//Solution 1 - Iterative solution using the split, join, parseInt, and fromCharCode Methods
function binaryAgent(str) {
  let splitArr = str.split(" ")
  for(let i = 0; i < splitArr.length; i++){
    splitArr[i] = String.fromCharCode(parseInt(splitArr[i], 2));
  }

  return splitArr.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
