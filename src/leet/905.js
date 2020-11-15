/*
    Given an array A of non-negative integers, return an array consisting of all the even elements of A,
    followed by all the odd elements of A.

    You may return any answer array that satisfies this condition.

    Example 1:
    Input: [3,1,2,4]
    Output: [2,4,3,1]
    The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
    
    Note:
    1 <= A.length <= 5000
    0 <= A[i] <= 5000
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {    
    /*approach 1 Time - O(n * log n), Space - O(n)
    return A.sort((a, b) => a % 2 ? 0 : -1);
    */
    
    /* approach 2 Time - O(n), Space - O(n)
    const list = [];
    let k = 0;
    
    for (let x of A) {
        if (x % 2 === 0) list.push(x);
    }
    
    for (let x of A) {
        if (x % 2 > 0) list.push(x);
    }
    
    return list;*/
    
    // approach 3 Time - O(n), Space - O(1)
    let i = 0, j = A.length - 1;
    while (i < j) {
        if (A[i] % 2 > A[j] % 2) {
            [A[i], A[j]] = [A[j], A[i]];
        }
        if (A[i] % 2 == 0) i++;
        if (A[j] % 2 == 1) j--;
    }
    return A;
};