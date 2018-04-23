/*
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true

0,0
1,0    up
0,0    down

Example 2:
Input: "LL"
Output: false

0,0
0,-1    left
0,-2    left

*/


var judgeCircle = function(moves) {
  let movesArr = moves.split(''),
  position = [0,0];

  movesArr.forEach(val => {
    if(val === 'D') {
      position[1] += -1;
    } else if (val === 'U') {
      position[1] += 1;
    } else if (val === 'L') {
      position[0] += -1;
    } else {
      position[0] += 1;
    }
  });

  return position.join('') === '00' ? true: false;
};

judgeCircle("UD");
