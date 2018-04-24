/*
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
Credits:
Special thanks to @ syedee for adding this problem and creating all test cases.
*/

// var countBits = function(num) {
//   let bitNum = num.toString(2);
//   let arr = [];
//   let other =[];

//   for(var i = 1; i <= num; i++) {
//     arr.push(i);
//     other.push(i.toString(2));
//   }
//   console.log(arr)
//   console.log(other);
// };

var countBits = function(num) {
  let bits = [];
  for (let i = 0; i <= num; i++) {
    bits.push(i.toString(2).replace(/0/g, '').length);
  }
  return bits;
};



countBits(5);
