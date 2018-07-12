//Solution 1
function whatIsInAName(collection, source) {
  return collection.filter((item) => {
    for (let i in source){
      if (item[i] !== source[i]){
        return false;
      }
    }
    return true;
  });
}

//Solution 2


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
