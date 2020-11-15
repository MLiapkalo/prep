/*
    Given the root node of a binary search tree (BST) and a value. 
    You need to find the node in the BST that the node's value equals the given value. 
    Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

    For example, 

    Given the tree:
         4
        / \
       2   7
      / \
     1   3

    And the value to search: 2
    You should return this subtree:

        2     
       / \   
      1   3
    In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

    Note that an empty tree is represented by NULL,
    therefore you would see the expected output (serialized tree format) as [], not null.
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    /* recursive approach: Time - O(n), Space - average log n(fairly balanced tree), worst - sorted linked list = n
    if (!root) return null;
    if (root.val === val) return root;
    return root.val < val ? searchBST(root.right, val) : searchBST(root.left, val);
    */
    
    // iterative approach
    const stack = [root];
    
    while (stack.length) {
        let node = stack.pop();
        if (node) {
            if (node.val === val) return node;
            val > node.val ? stack.push(node.right) : stack.push(node.left);
        } else return null;
    }
};