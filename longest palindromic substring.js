/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

 */


var longestPalindrome = function(s) {
  var max = '';
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      console.log(i, j, 'right: ', right,s[right],  'left: ', left, s[left], max)
      while (s[left] && s[left] === s[right]) {
        console.log('here')
        left--;
        right++;
      }
      if ((right - left - 1) > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};

let input = "babad";



longestPalindrome(input)




// var longestPalindrome = function(s) {
//   if(checkPalindrome(s)) {return true}

//   let splitWord = s.split(''),
//   sLength = splitWord.length,
//   fast = 0,
//   slow = 0,
//   longest = '',
//   current = '';

//   while(fast < sLength) {
//     let letter = splitWord[fast]
//     current += letter;
//     console.log('curr', current)

//   //console.log('pali',checkPalindrome(current), current)
//     if(checkPalindrome(current)) {
//       if(current.length > longest.length) {
//         longest = current;
//       }
//     }

//     if(fast === sLength-1) {
//       //console.log('here', fast)
//       slow++;
//       current = '';
//       fast = slow;
//       console.log(fast, slow)
//     } else {
//       fast++;
//     }
//   }
//   console.log('longest:', longest)
//   return longest.length
// };

// const checkPalindrome = (val) => {
//   let current = val.split(''),
//   flipped = '';

//   for(var i = current.length-1; i >= 0; i--) {
//     flipped += current[i];
//   }

//   return val === flipped ? true: false;
// }
