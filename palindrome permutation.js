/*
time: 2:16
Given a string, determine if a permutation of the string could form a palindrome.

For example,
"code" -> False, "aab" -> True, "carerac" -> True.
*/






var canPermutePalindrome = function(s) {
  let oddNumberLetters = 0,
  dict = {};

  s.split('').forEach(val => {
    if(dict[val]) {
      dict[val] += 1;
      if(dict[val] % 2 === 0) {
        oddNumberLetters--;
      } else {
        oddNumberLetters++;
      }
    } else {
      dict[val] = 1;
      oddNumberLetters++;
    }
  });

  //console.log(oddNumberLetters)

  if(s.length % 2 === 0 && oddNumberLetters >= 1) {
    return false;
  } else if (s.length % 2 !== 0 && oddNumberLetters >= 2) {
    return fasle;
  } else {
    return true;
  }
};

canPermutePalindrome("as")
