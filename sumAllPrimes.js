//Solution 1 - Using a helper function (isPrime) to determine a prime number

//Function to check whether a number is prime or not
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

//Function to sum all prime numbers
function sumPrimes(num) {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

sumPrimes(10);
