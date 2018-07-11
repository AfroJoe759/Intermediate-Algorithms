//Solution 1
function addTogether() {
  let args = Array.from(arguments);

  if (args.some(num => typeof num !== 'number')) {
    return undefined
  } else if (args.length > 1) {
    return args.reduce((acc, num) => acc += num, 0)
  }

  return (num) => typeof num === "number" ? num + args[0] : undefined;
}

addTogether(2, 3);
