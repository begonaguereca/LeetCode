/*


Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?


*/




var kthSmallest = function(root, k) {
  let nums = [];

  const helper = (node) => {
    if(!node) {
      return;
    } else {
      nums.push(node.val);

      if(node.right) {
        helper(node.right);
      }

      if(node.left) {
        helper(node.left);
      }
    }
  };
  helper(root);

  nums.sort((a,b)=> {return a -b});
  //console.log(nums)
  return nums[k-1];
  //console.log(nums);
};


let tree = {
  val: 3,
  right: { val: 4, right: null, left: null },
  left:  {
     val: 1,
     right: { val: 2, right: null, left: null },
     left: null }

};

kthSmallest(tree, 1)
