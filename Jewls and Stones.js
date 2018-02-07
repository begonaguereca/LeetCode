/*
START: 9:30

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:
Input: J = "z", S = "ZZ"
Output: 0

Note:
S and J will consist of letters and have length at most 50.
The characters in J are distinct.

*/

var numJewelsInStones = function(J, S) {
  let jewelCounter = 0,
  jewelDict = {},
  jewelArray = J.split(''),
  stonesArray = S.split('');

  jewelArray.forEach((jewel) => {
    jewelDict[jewel] = true;
  });

  stonesArray.forEach((stone) => {
    if (jewelDict[stone]) {
      jewelCounter++;
    }
  });

  return jewelCounter;
};

let J = "aA";
let S = "aAAbbbb";

numJewelsInStones(J, S);


/*
EXAMPLE:
Input:J = "aA", S = "aAAbbbb"

Output:3



Strategy:
//set counter to zero
//split the J string into an array,
//make the J string into a obj with each of the values being a key
//iterate through each of the s values comparing them to the J obj keys
//if the value matches a key, then increase the counter



Time Complexity: O(N)+ O(J)


*/
