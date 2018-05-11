/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/


var generateParenthesis = function(n) {
  let final= [];
  let dict = {};
  let poss = ['(', ')'];

  const helper = (index, arr) => {
    let str = arr.join('');
    console.log(arr)
    if(arr.length === n * 2 && !dict[str]) {
      final.push(str);
      dict[str] = true;
      return;
    } else {
      for(var i = index; i < n * 2; i++) {
        for(var j = 0; i < poss.length-1; i++) {
          //let curr = poss[j];
          //arr[i] = curr;
          helper(i + 1, arr.concat(poss[j]));
        }
      }
    }
  };

  helper(0, []);
  return final;
};



const checkIsValid = (arr) => {
  let temp = [];
  let final = true;

  arr.forEach(val => {
    if(val === '(') {
      temp.push(val);
    } else {
      if(temp[temp.length-1]!== '(') {
        final = false;
      } else {
        temp.pop();
      }
    }
  });

  return final && temp.length === 0? true: false;
};

//checkIsValid(['(','(',')',')']);



generateParenthesis(3);
