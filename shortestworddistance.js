/*

Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
["practice", "makes", "perfect", "coding", "makes"]
    x          x         x          x

Input: word1 = "makes", word2 = "coding"
Output: 1

["practice", "makes", "perfect", "coding", "makes"]
                x                 x          X

Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
*/



var shortestDistance = function(words, word1, word2) {
  let dictionary = {},
  distance = words.length,
  longest,
  shortest,
  loc_one = [],
  loc_two = [];

  words.forEach((val, i) => {
    if(val === word1) {
      loc_one.push(i);
    }

    if(val === word2) {
      loc_two.push(i);
    }
  });
  //console.log(loc_one, loc_two);

  loc_one.forEach(one => {
    loc_two.forEach(two => {
      if(one > two) {
        if(one - two < distance) {
          distance = one-two;
        }
      } else {
        if(two - one < distance) {
          distance = two-one;
        }
      }
    });
  });

  return distance;
};

let words = ["practice", "makes", "perfect", "coding", "makes"],
word1 = "coding",
word2 = "practice";

shortestDistance(words, word1, word2);
