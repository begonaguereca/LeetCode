/*

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701

*/





var titleToNumber = function(s) {
  let dictionary = zipper(),
  total = 0,
  place = 0;

  if(s.length === 1) {return dictionary[s]};

  for(var i = s.length - 1; i >= 0; i--) {
    let letter = s[i],
    val = dictionary[letter],
    addition = Math.pow(26, place) * val;

    //console.log('here', total);
    total += addition;
    place++;
  }
  return total;
};



const zipper = () => {
  let arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
  final = {};

  arr.forEach((val, i) => {
    final[val] = i+1;
  });

  return final;
};

titleToNumber("AAA");
