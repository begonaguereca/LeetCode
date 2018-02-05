/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].

*/

const spiralOrder = (matrix, arr) => {
  if (matrix.length === 0) {
    console.log('blah', arr);
    return 'boo';

  } else {
    //Add the first row
    arr = arr.concat(matrix.shift());
   console.log('FIRST',arr,'MATRIX:', matrix);

    //Add the right
    matrix.forEach(function(row) {
      arr = arr.concat(row.pop());
    });

  console.log('SECOND',arr,'MATRIX:', matrix);


    if (matrix.length !== 0) {
      //ADD TO THE BOTTOM
      let bottom = matrix.pop();
      let bottomTemp =[];

      for (var i = bottom.length - 1; i >= 0 ; i--) {
        bottomTemp.push(bottom[i]);
      }
      arr = arr.concat(bottomTemp);
      console.log('THIRD',arr,'MATRIX:', matrix);
    }

    //Add Left
    matrix.forEach(function(row) {
      let tempFirst = row.shift();
     // console.log('frist', tempFirst)
      arr = arr.concat(tempFirst);
    });

    //KEEP RECURSING
    console.log('FINAL',arr,'MATRIX:', matrix);
    spiralOrder(matrix, arr);
  }
};

const A = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
];


var final = spiralOrder(A, []);

console.log('here', spiralOrder(A, []));


/*
Input: A = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: array
//You should return [1,2,3,6,9,8,7,4,5].


Strategy:
   Use recursion to pop and shift off values, from
    //top
    //right
    //bottom
    // left
  Base case is to stop once the matrix is empty


Time Complexity: O(n). The larger the matrix is the longer it will take for the recursion to reach the center

*/
