/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.

*/


var reverseWords = function(s) {
  let splitWords = s.split(' ');
  let final = [];

  splitWords.forEach(word => {
    let flipped = flipWord(word);
    final.push(flipped);

  });
  return final.join(' ');
};

const flipWord = (word) => {
  let wordArr = word.split(''),
  current = '';

  for (var i = wordArr.length-1 ; i >= 0; i--) {
    current += wordArr[i];
  }
  return current;
};

//flipWord('begona');

reverseWords("Let's take LeetCode contest");
