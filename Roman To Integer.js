/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

*/

const romanToInt = (s) => {
  var dict = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

  var recurseInts = (str, num) => {
    if (str.length === 0) {
      console.log('aqui', num)
      return num;
    } else {
    //if last of three values are 'I'
    var indexStr = str.length - 1;

    //If any of the last three values are == 'I'
    if (str[indexStr] ==='I' && (str[indexStr] ==='I'|| str[indexStr - 1] ==='I' || str[indexStr - 2] ==='I')) {
      if (str[indexStr - 2] ==='I') {
        num += 3;
        let curr = str.split('');
        curr.splice(curr.length-3, 3);
        recurseInts(curr.join(), num);
      } else if (str[indexStr - 1] ==='I') {
        num += 2;
        let curr = str.split('');
        curr.splice(curr.length-2, 2);
        recurseInts(curr.join(), num);
      } else {
        num += 1;
        let curr = str.split('');
        curr.splice(curr.length-1, 1);
        recurseInts(curr.join(), num);
      }
    } else if (str[0] === 'I' && str[indexStr] !=='I') {
      num -= 1;
      str.split().splice(0,1);
      recurseInts(str, num);
    } else {
      let currRom = str[0];
      let currNum = dict[currRom];
      num += currNum;

      console.log(num)
      let curr = str.split('');
      curr.splice(0,1);
      recurseInts(curr.join(), num);
    }
  }
  };
  return recurseInts(s, 0);
};


var thing = romanToInt( 'XL');

console.log('thing: ', thing)





/*
Input: A =
Output: integer


Strategy:


Time Complexity:

*/
