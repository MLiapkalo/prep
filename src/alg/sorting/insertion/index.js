import { Comparator } from '../../../helpers/Comparator';
import { swap } from '../../../helpers/swap';

/**
 * 
 * @callback ComparisonFunction
 * @param {*} a
 * @param {*} b
 * @returns {number} - 1 if a > b, 0 if a === b, -1 if a < b
 */

/**
 * 
 * @param {Array} arr 
 * @param {ComparisonFunction} compareFn
 */
export function insertionSort(arr, compareFn) {
    const array = [...arr];
    const comparator = new Comparator(compareFn);

    if (array.length === 1) return array;

    for (let i = 1; i < array.length; i += 1) {
        let k = i;
        while (k > 0 && comparator.greater(array[k - 1], array[k])) {
            swap(array, k - 1, k);
            k -= 1;
        }
    }

    return array;
}