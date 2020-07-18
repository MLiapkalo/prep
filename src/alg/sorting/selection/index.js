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
export function selectionSort(arr, compareFn) {
    const array = [...arr];
    const comparator = new Comparator(compareFn);
    
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (comparator.less(array[j], array[minIndex])) minIndex = j;
        }

        swap(array, i, minIndex);
    }

    return array;
}