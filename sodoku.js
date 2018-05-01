// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// A partially filled sudoku which is valid.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]

var isValidSudoku = function(board) {
  let final = true,
  currentRow = 1,
  currentCol = 1,
  row = {},
  column = {},
  box1 = {}, box2 = {}, box3 = {};

  while(currentRow < board.length + 1 && currentCol < 10) {
    let currNum = board[currentRow][currentCol];

    //Row
    if(row[currNum] && currNum !== '.') {
      final = false;
      break;
    } else {
      row[currNum] = true;
    }

    //Column
    [0,1,2,3,4,5,6,7,8].forEach(coll => {
      let columnVal = board[row][coll];

      if(column[columnVal]){
        final = false;
        break;
      } else {
        column[columnVal] = true;
      }
    });
    column = 0;

  //Box
  if(currentCol)


  // traversing Array
    if(currentRow === 9) {
      currentRow = 0;
      row  = {};
      currentCol++;
    }
    if(currentCol === 9) {
      currentCol = 0;
    }
    currentRow++;
  }
  return final;
};
