/*

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false

*/





var isPalindrome = function(s) {
  if(s === '') {return true}

  let fixed = s.toLowerCase().split(' ').join('').replace(/[.,@\/#""!?$%\^&\*;:{}=\-_`~()]/g, ''),
  reversed = '';

  for(var i = fixed.length-1; i >= 0; i--) {
    reversed += fixed[i];
    //console.log('jere', reversed)
  }
   console.log('good:', fixed)
   console.log('reversed: ',reversed)
  return reversed === fixed ? true: false;
};



isPalindrome("Marge, let's \"went.\" I await news telegram.");
