/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

var lengthOfLongestSubstring = function(s) {
  let arr = s.split(''),
  dictionary = {},
  longestSub = '',
  currentSub = '',
  current = 0;

  while(current < arr.length + 1) {
    let letter = arr[current];
    //Repeate char
    //console.log(letter)
    if(dictionary[letter] || current === arr.length) {
      if(currentSub.length > longestSub.length) {
        longestSub = currentSub;
      }
      let iWord = currentSub.indexOf(letter);
      //console.log('Figure it out',iWord, currentSub)
      currentSub = currentSub.slice(iWord+1);
      //console.log('Sliced', currentSub)
    }
    // } else {

    // }
    currentSub += letter;
    dictionary[letter] = true;
    current++;
    //console.log('thibg', currentSub)
  }
  return longestSub;
};

lengthOfLongestSubstring("bbbbb")
