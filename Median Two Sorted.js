/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

*/

const medianTwoSorted = (arr1, arr2) => {
  var join = arr1.concat(arr2);
  join.sort(function(a, b) {
    return a - b;
  });

  let index = Math.ceiling(join.length/2);

  if (join.length % 2 === 0) {
    let index2 = index - 1;
    return (join[index1] + join[index2])/2;

  } else {

    return join[index];
  }
};





/*
Input: A = [1,2,5], [4,6,8]
Output: integer


Strategy:
  Concat both indexes
  sort the new array

  if arr length === even then find middle two numbers and find the average of the two
  if arr length === odd then find middle number and return

Time Complexity:
Sorting funciton - O(n)
Index Lookup - O(n)

*/
