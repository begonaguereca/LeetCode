function findLargest(rootNode) {
  if (rootNode.right) {
    return findLargest(rootNode.right);
  }
  return rootNode.value;
}

 function findSecondLargest(rootNode) {

   var current = rootNode;
   while (current) {
   if (current.left && !current.right) {
      return findLargest(current.left);
   }

    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }
  current = current.right;
 }
}




/////////////////////////////////////////

let thing = {
  node: 5,
  rightNode: {
      node: 10,
      right: null,
      left: {
        node: 1,
        right:null,
        left: null
      }
    },
  left: {
    node: 3,
    right: null,
    left: 2
  }
};

console.log(findSecondLargest(thing));

//output integer

/*
 recursivly iterate through the nodes keeping track of the largest and second largest node values that we come accross
    return the second largest node

    1. node = 5, Largest = 5 second = null
    2. node 10 , Largest = 10, second = 5
    3. node 2 , Largest = 10, second = 5
    4. node null
    5. node null
    6. node = 3,
    7. node = null
    8. node 2

    return 5


*/
