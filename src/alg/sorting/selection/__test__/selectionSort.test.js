import { selectionSort } from '..';
import { SortTester } from '@prep/helpers/SortTester';

describe('selection sort', () => {
    test('should sort an array', () => {
        SortTester.run(selectionSort);
    });

    test('should sort an array with custom compare function', () => {
        SortTester.withCustomCompareFn(selectionSort);
    });
});