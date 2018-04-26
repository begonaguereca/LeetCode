/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.

*/


var averageOfLevels = function(root) {
  let treeVals = [],
  treeCount = [];

  let traverseLevels = (node, depth) => {
    if(node === null) {
      return;
    } else {
      if(treeVals[depth]) {
        treeVals[depth] += node.val;
        treeCount[depth] +=1;
      } else {
        treeVals[depth] = node.val;
        treeCount[depth] =1;
      }
      if(node.right) {
        traverseLevels(node.right, depth + 1);
      }

      if(node.left) {
        traverseLevels(node.left, depth + 1);
      }
    }
  };
  traverseLevels(root, 0);
  return createAverages(treeVals, treeCount);
};

const createAverages = (vals, counts) => {
  return vals.map((val, i) => {
    return val / counts[i];
  });
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


let tree = new TreeNode(3);
tree.right = new TreeNode(20);
tree.left = new TreeNode(9);
tree.right.right = new TreeNode(7);
tree.right.left = new TreeNode(15);


averageOfLevels(tree);
