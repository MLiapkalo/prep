'''
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Example 1:

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Example 2:

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]

Example 3:

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]
 

Constraints:

1 <= n <= 500
nums.length == 2n
1 <= nums[i] <= 10^3
'''
from typing import List

def shuffle(nums: List[int], n: int) -> List[int]:
    shuffled = []
    for i in range(0, n):
        # if use append() twice instead of extend() runtime improves to 64ms, faster 75.99%
        shuffled.append(nums[i])
        shuffled.append(nums[n + i])
    return shuffled

print(shuffle([2,5,1,3,4,7], 3))
print(shuffle([1,2,3,4,4,3,2,1], 4))
print(shuffle([1, 1, 2, 2], 2))

# with python's zip function, speed: 29.11%, memory: 100%
# def shuffle(nums: List[int], n: int) -> List[int]:
#     res = []
#     for i, j in zip(nums[:n],nums[n:]):
#         res += [i,j]
#     return res

'''
Runtime: 80ms, faster 47.85%(extend), 64ms faster 75.99%
Memory: 14MB, less than 100%
'''