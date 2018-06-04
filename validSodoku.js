var isValidSudoku = function(board) {
    let row = [{},{},{},{},{},{},{},{},{}],
        column = [{},{},{},{},{},{},{},{},{}],
        block = [{},{},{},{},{},{},{},{},{}],
        R = 0,
        C = 0,
        B = 0,
        final = true;

    while(R < 9 && C < 9 && final) {
        let val = board[R][C];

        //Check Rows
        if(row[R][val] && val !== '.') {
            final = false;
        } else {
            row[R][val] = true;
        }

        //Check Col
        if(column[C][val] && val !== '.') {
            final = false;
        } else {
            column[C][val] = true;
        }

        //Check Block
        if(block[B][val] && val !== '.') {
           final = false;
        } else {
            block[B][val] = true;
        }

      if(C === 2 || C === 5) {
        B++
      } else if (C === 8 && R < 2) {
        console.log('one')
        B = 0
      } else if (C === 8 && R < 5 && R >= 2) {
        console.log('two')
        B = 3
      } else if (C === 8 && R < 9 && R >= 5) {
        console.log('three')
        B = 6
      }

      if(C === 8) {
          R++;
          C = 0;
      } else {
          C++;
      }
    }
    return final;
};


let board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]]


isValidSudoku(board)
