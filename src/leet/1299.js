/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right,
and replace the last element with -1.

After doing so, return the array.

Example 1:
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]

Constraints:
1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5
*/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = arr => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        arr[i] = Math.max(...arr.slice(i + 1))
    }

    arr[n - 1] = -1;

    return arr;
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElementsBetter = arr => {
    let max = -1;
    let prev = null;

    for (let i = arr.length - 1; i > -1; i--) {
        prev = arr[i];
        arr[i] = max;
        max = Math.max(arr[i], prev);
    }

    return arr;
};

