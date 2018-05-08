/*

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
You may assume both s and t have the same length.

*/


var isIsomorphic = function(s, t) {
  if(s.length !== t.length) {return false}

  let map = {},
  dictionary = {};
  final = true;

  for(var i = 0; i < s.length; i++) {
    let char = s[i],
    comp = t[i];
    console.log(char, comp)

    if(map[char]) {
      if(map[char] !== comp) {
        final = false;
      }
    } else {
      if(dictionary[comp]) {
        final = false;
      } else {
        map[char] = comp;
        dictionary[comp] = true;
      }
    }
  }
  console.log(map)
  return final;
};


let s = "egg", t = "add";

isIsomorphic(s, t);
