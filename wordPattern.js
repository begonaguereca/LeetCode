/*

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

Credits:
Special thanks to @minglotus6 for adding this problem and creating all test cases.

*/


var wordPattern = function(pattern, str) {
  let wordBank = str.split(' '),
  patternBank = pattern.split('');
  dictionary = {},
  checkWord = {},
  countPattern = 0;
  final = true;

  wordBank.forEach((word, i) => {
    let char = patternBank[i];
    //console.log(word, dictionary[char], patternBank, char);
    if(dictionary[char]) {
      if(dictionary[char] !== word) {
        final = false;
      } else {
        countPattern++;
      }
    } else {
      if(checkWord[word]) {
        final = false;
      } else {
        dictionary[char] = word;
        checkWord[word] = true;
        countPattern++;
      }
    }
  });
  //console.log(final, patternBank);
  if (patternBank.length !== countPattern) {final = false}
  return final;
};


let pattern = "abba", str = "dog cat cat dog";

wordPattern(pattern, str);
