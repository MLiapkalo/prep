/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
    let xBin = x.toString(2);
    let yBin = y.toString(2);
    
    xBin.length > yBin.length 
        ? yBin = yBin.padStart(xBin.length, '0') 
        : xBin = xBin.padStart(yBin.length, '0');
    
    return [...xBin].reduce(
        (distance, bit, i) => bit !== yBin[i] ? distance + 1 : distance,
        0
    );    
};

// const hammingDistance = (x, y) => (x^y).toString(2).replace(/0/g,'').length