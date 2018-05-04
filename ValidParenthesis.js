/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

var isValid = function(s) {
  let stack = [],
  dict = {')': '(', ']': '[', '}':'{'},
  final = true;

  s.split('').forEach(val => {
      console.log('start', val, stack)
    if(val === '{' || val === '[' || val === '(') {
      stack.push(val);
    } else {
      //console.log('stack: ', stack[stack.length-1],dict[val],stack[stack.length-1] === dict[val] )
      if(stack[stack.length-1] !== dict[val]) {
        final = false;
      } else {
        stack.pop();
      }
    }
  });
  //console.log(stack)
  return final && stack.length === 0 ? true : false;
};

isValid("((")
