import { binarySearch } from '..';

describe('binarySearch', () => {
    describe('with default compare function', () => {
        const list = [0, 2, 3, 12, 99];

        test('should return index of 99 => 4', () => {
            expect(binarySearch(list, 99)).toBe(4);
        });
    
        test('should return -1 if value is not in list', () => {
            expect(binarySearch(list, 100)).toBe(-1);
        });
    
        test('should return -1 if value is in unsorted list', () => {
            expect(binarySearch([11, 0, 2, 1, 5], 0)).toBe(-1);
        });
    });

    describe('with custom compare function', () => {
        const list = [
            { key: 1, value: 'Rose' },
            { key: 2, value: 'John' },
            { key: 3, value: 'Moe' },
            { key: 4, value: 'James' }
        ];
        const compareFn = (a, b) => {
            if (a.key === b.key) return 0;
            return a.key > b.key ? 1 : -1;
        }

        test('should do search with help of custom compare function', () => {
            expect(binarySearch(list, { key: 3 }, compareFn)).toBe(2);
            expect(binarySearch(list, { key: 1 }, compareFn)).toBe(0);
            expect(binarySearch(list, { key: 5 }, compareFn)).toBe(-1);
        });
    });
});