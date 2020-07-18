/**
 * 
 * @param {Array} arr 
 * @param {number} i 
 * @param {number} j 
 */
export function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
}