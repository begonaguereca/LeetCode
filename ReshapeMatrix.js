/*
In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
Input:
nums =
[[1,2],
 [3,4]]
r = 1, c = 4
Output:
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
Example 2:
Input:
nums =
[[1,2],
 [3,4]]
r = 2, c = 4
Output:
[[1,2],
 [3,4]]
Explanation:
There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
Note:
The height and width of the given matrix is in range [1, 100].
The given r and c are all positive.



*/

var matrixReshape = function(nums, r, c) {
  let count = calcVals(nums),
  final = createArray(r,c),
  currentRow = 0,
  currentCollumn = 0,
  nRow = 0,
  nCol = 0;

  if(count !== r*c) {return nums};

  while(currentRow !== r && currentCollumn !== c) {
    let currentVal = nums[nRow][nCol];
    final[currentRow][currentCollumn] = currentVal;

    //New Array
    if(currentCollumn+1 > c-1) {
      currentCollumn = 0;
      currentRow++;
    } else {
      currentCollumn++;
    }

    //Old Array
    if(nCol+1 > nums[0].length-1) {
      nCol = 0;
      nRow++;
    } else {
      nCol++;
    }

  }
  console.log(final);
};

const createArray = (r, c) => {
  let final = [];

  for(var i = 0; i < r; i++) {
    let newArr = new Array(c);
    final.push(newArr);
  }

  return final;
};

const calcVals = (arr) => {
  let count =0;

  arr.forEach(row => {
    row.forEach(val => {
      count++;
    });
  });

  return count;
};


let nums = [[1,2],[3,4]], r = 4, c = 1;

matrixReshape(nums, r, c);
