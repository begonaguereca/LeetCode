function largestOfFour(arr) {
  let final = [];

  arr.forEach(function(group) {
    let largest = group.reduce(function(a, b){
      return a > b ? a: b;
    });
    final.push(largest);
  });
  return final;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
