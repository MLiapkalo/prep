/*
    Given two binary trees and imagine that when you put one of them to cover the other,
    some nodes of the two trees are overlapped while the others are not.

    You need to merge them into a new binary tree.
    The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.
    Otherwise, the NOT null node will be used as the node of new tree.

    Example 1:
    Input:
        Tree 1                     Tree 2
              1                         2
             / \                       / \
            3   2                     1   3
           /                           \   \
          5                             4   7
    Output:
    Merged tree:
             3
            / \
           4   5
          / \   \
         5   4   7

    Note: The merging process must start from the root nodes of both trees.
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = (t1, t2) => {
    // recursive approach
    // if (!t1 && !t2) return null;
    //
    // const { val: t1Val = 0, left: t1Left, right: t1Right } = t1 || {};
    // const { val: t2Val = 0, left: t2Left, right: t2Right } = t2 || {};
    //
    // return new TreeNode(
    //     t1Val + t2Val,
    //     mergeTrees(t1Left, t2Left),
    //     mergeTrees(t1Right, t2Right)
    // );

    // iterative approach with stack
    const nodes = [[t1, t2]];

    while (nodes.length) {
        const [t1Node, t2Node] = nodes.pop();

        if (!t1Node || !t2Node) continue;

        t1Node.val += t2Node.val;

        if (!t1Node.left) {
            t1Node.left = t2Node.left;
        } else {
            // push left children
            nodes.push([t1Node.left, t2Node.left]);
        }

        if (!t1Node.right) {
            t1Node.right = t2Node.right;
        } else {
            // push right children
            nodes.push([t1Node.right, t2Node.right]);
        }
    }

    return t1;
};