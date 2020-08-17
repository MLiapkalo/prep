import { Comparator } from '../../../helpers/Comparator';

/**
 * 
 * @callback ComparisonFunction
 * @param {*} a
 * @param {*} b
 * @returns {number} - 1 if a > b, 0 if a === b, -1 if a < b
 */

/**
 * 
 * @param {Array} left 
 * @param {Array} right 
 * @param {ComparisonFunction} compareFn 
 */
const merge = (left, right, compareFn) => {
    const comparator = new Comparator(compareFn);
    // i - pointer on left subarray, k - on right subarray
    let i = 0, k = 0;

    let merged = [];

    while (i < left.length && k < right.length) {
        if (comparator.lessOrEqual(left[i], right[k])) {
            merged.push(left[i]);
            i += 1;
        } else {
            merged.push(right[k]);
            k += 1;
        }
    }

    // if something remains in left or in right subarray - concat it

    if (i < left.length) {
        merged = [...merged, ...left.slice(i)];
    }

    if (k < right.length) {
        merged = [...merged, ...right.slice(k)];
    }

    return merged;
}

/**
 * 
 * @param {Array} arr 
 * @param {ComparisonFunction} compareFn 
 */
export const mergeSort = (arr, compareFn) => {
    const array = [...arr];

    // if received array is of length <= 1 there is nothing to sort
    if (array.length < 2) return array;

    const mid = Math.floor(array.length / 2);

    const left = mergeSort(array.slice(0, mid), compareFn);
    const right = mergeSort(array.slice(mid), compareFn);

    return merge(left, right, compareFn);
}