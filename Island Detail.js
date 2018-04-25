/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]
 //
 All -LWall
 top - topWall
 bottom - bottomWall


Answer: 16
Explanation: The perimeter is the 16 yellow stripes in the image below:


*/

var islandPerimeter = function(grid) {
  let total = 0;

  grid.forEach((layer, y) => {
    layer.forEach((square,i) => {
      console.log(layer, square)
      if(square === 1) {
        console.log('insdie')
        let perimeter = 4;
        //Right
        if(layer[i+1] === 1  ) {
          perimeter--;
        }

        //Left
        if(layer[i-1] === 1) {
          perimeter--;
        }

        //Top
        if(y !== 0) {
          if(grid[y-1][i] === 1) {
            perimeter--;
          }
        }

        //Bottom
        if(y !== grid.length-1) {
          if(grid[y+1][i]=== 1) {
            perimeter--;
          }
        }
        total += perimeter;
      }
    });
  });
  return total;
};

let input = [[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]];

islandPerimeter(input);
