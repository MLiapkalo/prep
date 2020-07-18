import { Comparator } from '../../helpers/Comparator';

/**
 * 
 * @param {any[]} arr 
 * @param {any} val
 * @param {function(a, b)} compareFn
 */
export function binarySearch(arr, val, compareFn) {
    const comparator = new Comparator(compareFn);
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (comparator.equal(arr[mid], val)) return mid;
        else if (comparator.greater(arr[mid], val)) high = mid - 1;
        else low = mid + 1;
    }

    return -1;
}