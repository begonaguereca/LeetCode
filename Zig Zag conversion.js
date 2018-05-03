/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

0 P     I    N
1 A   L S  I G
2 Y A   H R
3 P     I

*/



var convert = function(s, numRows) {
  let final = [],
  big = 0,
  little = 0,
  little_place = numRows - 2;

  s.split('').forEach((letter, i)=> {
    console.log(letter, big, little, final)
    if(big === numRows && little === numRows -2) {
      big = 0;
      little = 0;
      little_place = numRows - 2;
    }
    //Big Colums
    if(big < numRows) {
      //console.log('here')
      if(final[big]) {
        final[big] += letter;
      } else {
        final[big] = letter;
      }
      big++;
    //Little Columns
    } else if (little < numRows - 2) {
      //console.log(letter, little_place, final)
      if(final[little_place]) {
        final[little_place] += letter;
      } else {
        final[little_place] = letter;
      }
      little++;
      little_place--;
    }
  });
  return final;
};


let s = "PAYPALISHIRING", numRows = 4;


convert(s, numRows)
"PIN ALSIG YAHRPI"
// "PAHN APLSIIG YIR"
// 0 P   A   H   N
// 1 A P L S I I G
// 2 Y   I   R
