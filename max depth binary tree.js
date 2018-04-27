/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/


var maxDepth = function(root) {
 let longest = 1;
 if(root === null) {return 0}

 const innerLoop = (root,depth) => {
  if(root.val === null) {
    return;
  } else {
    if(root.right) {
      depth++;
      maxDepth(root.right, depth);
    }
    if(root.left) {
      depth++;
      maxDepth(root.left, depth);
    }

    else longest = Math.max( longest, depth );
  }
 };
 innerLoop(root, 1);
 return longest;
};


let thing = {
  val: 5,
  right:null,
  left: null
};


maxDepth(thing);
