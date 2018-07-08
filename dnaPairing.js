function pairElement(str) {
  let pairs = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') {
      pairs.push(['A', 'T']);
    }

    if (str[i] === 'T') {
      pairs.push(['T', 'A']);
    }

    if (str[i] === 'C') {
      pairs.push(['C', 'G']);
    }

    if (str[i] === 'G') {
      pairs.push(['G', 'C']);
    }
  }
  return pairs;
}

pairElement("GCG");
