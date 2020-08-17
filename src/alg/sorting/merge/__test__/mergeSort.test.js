import { mergeSort } from '..';
import { SortTester } from '@prep/helpers/SortTester';

describe('selection sort', () => {
    test('should sort an array', () => {
        SortTester.run(mergeSort);
    });

    test('should sort an array with custom compare function', () => {
        SortTester.withCustomCompareFn(mergeSort);
    });

    test('should sort negative numbers', () => {
        SortTester.withNegativeNumbers(mergeSort);
    });
});