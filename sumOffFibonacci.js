function sumFibs(num) {
  if(num < 1){
    return 0;
  }

  else if(num == 1){
    return 2;
  }

  var sum = 2;
  var fibonacci = 1;
  var prevNum = 1;

  for(var i = 3; i <= num; i++){
    fibonacci += prevNum;
    prevNum = fibonacci - prevNum;

    if(fibonacci % 2 == 1 && fibonacci <= num){
      sum += fibonacci;
    }
  }

  return sum;
}

sumFibs(4);
