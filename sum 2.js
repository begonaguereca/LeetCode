/*

Numbers can be regarded as product of its factors. For example,

8 = 2 x 2 x 2;
  = 2 x 4.
Write a function that takes an integer n and return all possible combinations of its factors.

Note:
You may assume that n is always positive.
Factors should be greater than 1 and less than n.
Examples:
input: 1
output:
[]

input: 37
output:
[]

input: 12
output:
[
  [2, 6],
  [2, 2, 3],
  [3, 4]
]

input: 32
output:
[
  [2, 16],
  [2, 2, 8],
  [2, 2, 2, 4],
  [2, 2, 2, 2, 2],
  [2, 4, 4],
  [4, 8]
]

*/





var getFactors = function(n) {
  let final = [];

  const recurseInner = (num, sum, arr) => {
    console.log('sum', sum )
    if(sum === n) {
      final.push(arr);
    } else {
      console.log(num, sum, arr);
      if(num % 2 === 0) {
        let curr = num/2;
        arr.push(curr)
        arr.push(2);
        recurseInner(num/2, sum * 2 * curr, arr);
      }

      if(num % 3 === 0) {
        let curr = num/3
        arr.push(num/3)
        arr.push(3);
        recurseInner(num/3, sum * 3 * curr, arr);
      }

      if(num % 5 === 0) {
        let curr = num/5
        arr.push(num/5)
        arr.push(5);
        recurseInner(num/5, sum * 5 * curr, arr);
      }

      if(num % 7 === 0) {
        let curr = num/7
        arr.push(num/7)
        arr.push(7);
        recurseInner(num/7, sum * 7* curr, arr);
      }
    }
  };

  recurseInner(n, 1, []);
  return final;
};

getFactors(12);
