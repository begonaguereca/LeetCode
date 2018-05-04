/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
------------------------
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


*/

var reverse = function(x) {
  let top_bar = Math.pow(2,31);
  if(x > top_bar || x < -Math.pow(2,31)) {
    return 0;
  };
//console.log('here', Math.pow(2,32), x > Math.pow(2,32), x - Math.pow(2,32))
  let str = x + '',
  reversed = '';

  for(var i = str.length-1; i >= 0; i--) {
    if(str[i] === '-'){
      reversed = '-' + reversed;
    } else {
      reversed +=str[i]
    }
  }
  let final = parseInt(reversed)
  console.log('final', final)
  if(final > top_bar || final < -Math.pow(2,31)) {
    return 0;
  } else {
    return final;
  }

};

let test = reverse(1534236469)
console.log('jere', test)

console.log('1534236469'.length)

console.log('2147483647'.length)
