/*
Range Sum of BST.

Share
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32

Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23

Note:

The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
function rangeSumBST(root, L, R) {
    // runtime: 212ms faster than 52.84%
    // memory 60.7 MB les than 74.32%
    let leftSum = 0, rightSum = 0;
    
    let nodeSum = root.val >= L && root.val <= R ? root.val : 0;
    
    if (root.left) {
        leftSum = rangeSumBST(root.left, L, R);
    }
    
    if (root.right) {
        rightSum = rangeSumBST(root.right, L, R);
    }
    
    return nodeSum + leftSum + rightSum;
};

function rangeSumBST(root, L, R) {
    // runtime 220ms, faster than 50.92%
    // memory 61.3 MB, less than 74.32%(sometimes drops down to 5.02% idk why)
    let nodes = [root], sum = 0;
    
    while (nodes.length) {
        const node = nodes.pop();
        
        if (node.val >= L && node.val <= R) {
            sum += node.val;
        }
        
        if (node.left && node.val > L) {
            nodes.push(node.left);
        }
        
        if (node.right && node.val <= R) {
            nodes.push(node.right);
        }    
    }
    
    return sum;
};