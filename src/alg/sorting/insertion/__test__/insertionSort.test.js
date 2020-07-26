import { insertionSort } from '..';
import { SortTester } from '@prep/helpers/SortTester';

describe('selection sort', () => {
    test('should sort an array', () => {
        SortTester.run(insertionSort);
    });

    test('should sort an array with custom compare function', () => {
        SortTester.withCustomCompareFn(insertionSort);
    });

    test('should be stable', () => {
        SortTester.stable(insertionSort);
    });

    test('should sort negative numbers', () => {
        SortTester.withNegativeNumbers(insertionSort);
    });
});