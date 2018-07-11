//Solution 1
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  let orbitalPer
  for(let i = 0; i < arr.length; i++) {
    orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM));

    delete arr[i].avgAlt;

    arr[i].orbitalPeriod = orbitalPer;
  }

  return arr;
}

// test here
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
