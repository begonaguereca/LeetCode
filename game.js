/*
You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.

Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.

For example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

*/


var canWinNim = function(n) {
  let moves = [1,2,3],
  final = false;

  let innerRoll = (stones, tally, score) => {
    console.log(stones, tally, final,score);
    if(stones <= 0) {
      if(tally % 2 === 0) { final = true}
      return;
    } else {
      moves.forEach(move => {
        //console.log('MOVE', move)
        innerRoll(stones-move, tally+1, score.concat(move));
      });
    }
  };

  innerRoll(n, 1, []);
  return final;
};

canWinNim(4);
