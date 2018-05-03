/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.



*/

// var longestCommonPrefix = function(strs) {
//   let common = '';

//   strs[0].forEach((char, j) => {
//     for(var i = 1; i < strs.length; i++) {
//       let current = strs[i].split(''),
//       long = '';

//       if(current[j] !== char) {

//       }
//     }
//   });
//   return common;
// };

function longestCommonPrefix(strs) {
  if (!strs.length) return '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
    }
  }
  return strs[0];
}



longestCommonPrefix(["flower","flow","flight"]);
