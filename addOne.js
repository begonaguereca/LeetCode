/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

var plusOne = function(digits) {
  let len = digits.length;
  let final = digits[len-1];
  if(final + 1 >= 10) {
    let current = len - 1,
    leftover = 1;

    while(current >= 0) {
      if(digits[current] + leftover >= 10) {
        let diff = digits[current] + leftover - 10;
        digits[current] = diff;
      } else {
        digits[current] += leftover;
        leftover = 0;
      }
      current--;
    }
    if(leftover !== 0) {
    digits.unshift(leftover)
    }
  } else {
    digits[len-1] +=1
  }
  return digits;
};



plusOne([9])
