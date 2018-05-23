var findTheDifference = function(s, t) {
  let sSorted = s.split('').sort();
  let tSorted = t.split('').sort();
  let final = '';

  console.log(sSorted);
  console.log(tSorted);

  for(var i =0; i < tSorted.length;i++) {
    if(sSorted[i] !== tSorted[i]) {
      console.log(sSorted[i], tSorted[i])
      final = tSorted[i];
      break;
    }
  }
  return final;
};

let s = "abcd"
t = "abcde"

findTheDifference(s, t)
