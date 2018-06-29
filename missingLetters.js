//Solution 1
function fearNotLetter(str) {
  for(let i = 0; i < str.length; i++){
    if(str.charCodeAt(i + 1) - str.charCodeAt(i) == 2){
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
