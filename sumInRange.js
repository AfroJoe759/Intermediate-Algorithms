//Solution 1
function sumAll(arr) {
  var low = arr[0] < arr[1] ? arr[0] : arr[1];
  var high = arr[0] < arr[1] ? arr[1] : arr[0];
  var sum = 0;

  for(var i = low; i <= high; i++){
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);
