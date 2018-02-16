function checkBinaryTree(root, final) {
  console.log(root.node);
  if (root.node) {

    if (root.left) {
      if (root.left.node < root.node) {
        checkBinaryTree(root.left, final);
      } else {
        final = false;
      }
    }

    if(root.right) {
      if(root.right.node > root.node) {
        checkBinaryTree(root.right, final);
      } else {
        final = false;
      }
    }
  }
  return final;
}


/////////////////////////////////////////

let thing = {
  node: 5,
  right: {
      node: 2,
      right: null,
      left: {
        node: 1,
        right:null,
        left: null
      }
    },
  left: {
    node: 3,
    right: {
        node: 4,
        right:null,
        left: null
      },
    left: {
        node: 2,
        right:null,
        left: null
      }
  }
};

checkBinaryTree(thing, true);

//output integer

/*
 recursivly iterate through the nodes checking that values to the right are greater than and values to the left are less than





*/
