//Solution 1 - Eiclidean Algorithm
//Use tbe Euclidean Algorithm to find the GCD
function GCD(x, y) {

  //The base case which returns the GCD
  //When y equals 0, the GCD has been found
  if (y === 0) {
    return x;
  }

  //Throws callback to GCD Function using recursion
  return (GCD(y, x % y))
}

function smallestCommons(arr) {
  let values = [];
  for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    values.push(i);
  }

  let lcm = 0;
  let gcd = 0;

  for (let i = 0; i < values.length; i++) {
    if (i === 0) {
      lcm = values[0];
    } else {
      gcd = GCD(lcm, values[i]);
      lcm = (lcm * values[i]) / gcd;
    }
  }

  return lcm;
}


smallestCommons([1, 5]);
