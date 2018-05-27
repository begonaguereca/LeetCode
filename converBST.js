/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let values = getVals(root);

    const inner = (node) => {
        //console.log(node)
        if(!node) {
           return;
        } else {
            let sum = node.val;
            values.forEach(val => {
                if(val > node.val) {
                    sum += val;
                }
            })

            node.val = sum;

            if(node.right) {
                inner(node.right)
            }

            if(node.left) {
                inner(node.left)
            }
        }
    }
    inner(root)
    return root;
};

var getVals = (root) => {
    let vals = [];

    const inner = (node) => {
        if(!node) {
            return;
        } else {
            vals.push(node.val);

            if(node.right) {
                inner(node.right)
            }

            if(node.left) {
                inner(node.left)
            }
        }
    }
    inner(root);
    return vals;
}


// var convertBST = function(root) {
//     var sum = 0;
//     function helper(node){
//         if (node === null) return;

//         helper(node.right)
//         node.val += sum
//         sum = node.val
//         helper(node.left)
//     }
//     helper(root);
//     return root;
// };
