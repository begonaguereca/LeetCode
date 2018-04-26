/*
Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

Example 1:
Input: 5
Output: True
Explanation:
The binary representation of 5 is: 101

Example 2:
Input: 7
Output: False
Explanation:
The binary representation of 7 is: 111.

Example 3:
Input: 11
Output: False
Explanation:
The binary representation of 11 is: 1011.

Example 4:
Input: 10
Output: True
Explanation:
The binary representation of 10 is: 1010.


*/



var hasAlternatingBits = function(n) {
  let bit = n.toString(2).split(''),
  final = true;
  console.log(bit);

  bit.forEach((val, i) => {
    //console.log(val, i, final);
    //Evens
    if(i % 2 !== 0) {
      if(val !== '0') {
        final = false;
      }
    //odds
    } else {
      if(val !== '1') {
        final = false;
      }
    }
  });

  return final;
};



hasAlternatingBits(4);
