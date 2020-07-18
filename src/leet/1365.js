/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
 

Constraints:

2 <= nums.length <= 500
0 <= nums[i] <= 100
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
    const cache = {};
    const res = Array(nums.length).fill(0);
    
    for(let i = 0; i < nums.length; i++) {
        let current = nums[i];
        
        if (!current) {
            res[i] = 0;
            continue;
        }
        
        if (!isNaN(cache[current])) {
            res[i] = cache[current];
            continue;
        }
        
        for(let j = 0; j < nums.length; j++) {
            if (nums[j] < current) {
                res[i] += 1
            }
        }
        
        cache[current] = res[i]
    }
    
    return res;
    
    // return nums.map((n, _, arr) => arr.filter(x => x < n).length);
};

// worth to take a look 
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/discuss/524996/JAVA-beats-100-O(n)

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
console.log(smallerNumbersThanCurrent([6,5,4,8]));
