//Solution 1
function translatePigLatin(str) {

  if(str[0] === 'a' || str[0] === 'e' || str[0] === 'i' || str[0] === 'o' || str[0] === 'u'){
    return str + "way"
  }

  for(let i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
      return (str.slice(i, str.length) + str.slice(0, i) + "ay");
    }
  }

  return str + "ay";
}

translatePigLatin("consonant");
