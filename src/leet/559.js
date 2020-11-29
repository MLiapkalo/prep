/*
    Given a n-ary tree, find its maximum depth.
    The maximum depth is the number of nodes along the longest path 
    from the root node down to the farthest leaf node.
*/

/**
 * Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
const maxDepthBFS = root => {
    if (!root) return 0;
    
    let depth = 0;
    const queue = [root];
    
    while (queue.length) {
        const len = queue.length;
        console.log(queue.map(({ val }) => val));
        console.log(depth);
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            node.children.forEach(child => queue.push(child));
        }
        depth++;
    }
    
    return depth++;
};

/**
 * @param {Node} root
 * @return {number}
 */
const maxDepthDFS = root => {
    // recursive one-liner
    // return root ? root.children.reduce((r, n) => Math.max(r, maxDepth(n)), 0) + 1 : 0;

    if (!root) return 0;
    let max = 0;
    for (let child of root.children) {
        max = Math.max(max, maxDepth(child));
    }
    return max + 1;
};