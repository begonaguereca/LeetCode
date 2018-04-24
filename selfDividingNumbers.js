/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input:
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.

*/



var selfDividingNumbers = function(left, right) {
  let possibleNums = getNumbers(left, right),
  finalNums = [];

  possibleNums.forEach(val => {
    let currArr = (val + '').split(''),
    divisable = true;

    currArr.forEach(num => {
      let currNum = parseInt(num);
      if(val % currNum !== 0) {
        divisable = false;
      }
    });

    if(divisable){finalNums.push(val)}
  });

  return finalNums;
};

const getNumbers = (num1, num2) => {
  let possibleNums = [],
  current = left;

  while(current <= right){
    possibleNums.push(current);
    current++;
  }
  return possibleNums;
};

let left = 1, right = 22;
selfDividingNumbers(left, right);
