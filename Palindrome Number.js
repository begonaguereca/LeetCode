/*
Determine whether an integer is a palindrome. Do this without extra space.

*/

var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  } else {
    return flipIt(x);
  }
};

var flipIt = function(num) {
  var splitStr = (num + '').split('');
  var final = true;
  var counter = splitStr.length - 1;

  for (var i = 0; i < Math.floor(splitStr.length/2); i++){
    if (splitStr[i] !== splitStr[counter]) {
      final = false;
    }
    counter--;
  }
  return final;
};


isPalindrome(12321)


/*
Input: A = 1221
Output: Boolean


Strategy:
   if num is less than 0 return false
   else convert number into an Array
   Set outside counter to last index of the array
   iterate thorugh the array until reach the midpoint checking to see if the num === num in the last index of the array
   continue to do this, decrementing the the counter index as you go

Time Complexity:
o(log n) --- because its a for loop, but we are only iterating through half of the values

*/
