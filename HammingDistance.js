/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/


var hammingDistance = function(x, y) {
  let yBits = (y).toString(2).split('');
  let xBits = (x).toString(2).split('');
  let longest = findLongest(xBits, yBits);
  let xArray = addZeros(xBits, longest);
  let yArray = addZeros(yBits, longest);
  let current = 0;
  let finalCount = 0;

  //console.log(longest, xBits, yBits, xBits.length, yBits.length);

  while(current < xArray.length) {
    if(yArray[current] !== xArray[current]) {
      finalCount++;
    }
    current++;
  }

  return finalCount;
};


const addZeros = (val, len) => {
  //console.log(val, len)
  if(val.length === len) {
    return val;
  } else {
    let current = 0,
    valLength = len - val.length;

    while(current < valLength) {
      val.unshift('0');
      //console.log(val, current, valLength )
      current ++;
    }
   return val;
  }
};

const findLongest = (x, y) => {
  //console.log('finding',x, y, x.length, y.length, x.length >= y.length)
  if(x.length >= y.length) {
    return x.length;
  } else {
    return y.length;
  }
};


//x
//1011001011111010011001011110100
//0001111011011001101011011110011
//y


let  x = 1501377268, y = 258791155;

hammingDistance(x, y);
