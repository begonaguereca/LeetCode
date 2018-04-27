/*
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to

     4
   /   \
  7     2
 / \   / \
9   6 3   1


0 1 2 3

3 2 1 0
*/




var invertTree = function(root) {

  const traverseTree = (node, depth, arr) => {
    if(root === null) {
      return;
    } else {
      if(node.right) {

      }
      if(node.left) {

      }
    }
  };
  traverseTree(root, 1, []);
};


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var tree = new TreeNode(4);
tree.right = new TreeNode(7);
tree.left = new TreeNode(2);

tree.right.right = new TreeNode(9);
tree.right.left = new TreeNode(6);

tree.left.right = new TreeNode(1);
tree.left.left = new TreeNode(3);


invertTree(tree);
