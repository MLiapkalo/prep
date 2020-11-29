/*
Invert a binary tree.

Example:

Input:
     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:
     4
   /   \
  7     2
 / \   / \
9   6 3   1
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
 * @return {TreeNode}
 */
const invertTreeRec = root => {
    if (!root) return root;
    
    [root.left, root.right] = [root.right, root.left];
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTreeIt = root => {
    let stack = [root];
    
    while (stack.length) {
        let node = stack.pop();
        
        if (node) {
            stack.push(node.left, node.right);
            [node.left, node.right] = [node.right, node.left];
        }
    }
    
    return root;
};