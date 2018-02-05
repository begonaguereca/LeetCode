/*
Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.
For example, with A = "abcd" and B = "cdabcdab".
Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").
Note:
The length of A and B will be between 1 and 10000.

*/

const repeatedStringMatch = (str1, str2) => {
  let findMeLength = str2.length;
  let searcherLength = str1.length;
  let searcherRepeated = str1;
  let count = 1;

    while (searcherRepeated.length < findMeLength) {
      searcherRepeated += str1;
      count++;
    }


  if (searcherRepeated.length === findMeLength) {
    if (searcherRepeated.indexOf(str2) !== -1) {
      return count;
    } else {
      searcherRepeated += str1;
      count++;
      return searcherRepeated.indexOf(str2) !== -1 ? count: -1;
    }
  } else {
    return searcherRepeated.indexOf(str2) !== -1 ? count: -1;
  }
};

var A = "baa";
var B = "abaab";
repeatedStringMatch (A, B);


/*
Input: A = "abcd", B = "cdabcdab"
Output: integer


Strategy:
  Find the length of B and A
  Repeat A until same length or greater than B
    if they are the SAME length check if substring exists return the number of times A was repeated if true
    if same length was false also repeat an additional time--- check for substring
  if GREATER length --- check for substring

Time Complexity:
 O(n) for the while loop + o(N) for index of look ups

*/
