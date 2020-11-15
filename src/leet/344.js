/*
Write a function that reverses a string.
The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

Example 1:
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * Iterative, time - O(n) = N / 2 swaps, space - O(1)
 */
const reverseString = s => {
    let i = 0, k = s.length - 1;
    
    while (i < k) {
        let temp = s[i];
        s[i++] = s[k];
        s[k--] = temp;
    }
};

// Recursive, time - O(n) = N / 2 swaps, space O(n) = recursive stack size 
const reverseStringRecursive = s => {
    const helper = (s, left, right) => {
        if (left > right) return;
        const temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        helper(s, left + 1, right - 1);
    };
     
     helper(s, 0, s.length - 1);
}