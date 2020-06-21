'''
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
'''

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# runtime 224ms, faster than 90.81%
# memory 21.8 MB, less than 82.43%
def rangeSumBST(root: TreeNode, L: int, R: int) -> int:
        nodes = [root]
        sum = 0
        
        while len(nodes):
            node = nodes.pop()
            
            if node.val >= L and node.val <= R:
                sum += node.val
                
            if node.left and node.val > L:
                nodes.append(node.left)
                
            if node.right and node.val < R:
                nodes.append(node.right)
        
        return sum

# def rangeSumBST(root: TreeNode, L: int, R: int) -> int:
#     current = root.val if root.val >= L and root.val <= R else 0
#     return (current 
#         + rangeSumBST(root.left, L, R) if root.left and root.val > L else 0 
#         + rangeSumBST(root.right, L, R) if root.right and root.val <= R else 0)