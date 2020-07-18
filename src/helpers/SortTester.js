const sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const reversed = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const unsorted = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
const equal = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const negatives = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
const sortedNegatives = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];

export const arrays = {
    sorted,
    reversed,
    unsorted,
    equal,
    negatives,
    sortedNegatives
};

export class SortTester {
  static run(sortingFn) {
    expect(sortingFn([])).toEqual([]);
    expect(sortingFn([1])).toEqual([1]);
    expect(sortingFn([1, 2])).toEqual([1, 2]);
    expect(sortingFn([2, 1])).toEqual([1, 2]);
    expect(sortingFn([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
    expect(sortingFn(sorted)).toEqual(sorted);
    expect(sortingFn(reversed)).toEqual(sorted);
    expect(sortingFn(unsorted)).toEqual(sorted);
    expect(sortingFn(equal)).toEqual(equal);
  }

  static withNegativeNumbers(sortingFn) {
    expect(sortingFn(negatives)).toEqual(sortedNegatives);
  }

  static withCustomCompareFn(sortingFn) {
    const compareFn = (a, b) => {
        if (a.length === b.length) return 0;
        return a.length < b.length ? -1 : 1;
    };

    expect(sortingFn([''], compareFn)).toEqual(['']);
    expect(sortingFn(['a'], compareFn)).toEqual(['a']);
    expect(sortingFn(['aa', 'a'], compareFn)).toEqual(['a', 'aa']);
    expect(sortingFn(['aa', 'q', 'bbbb', 'ccc'], compareFn)).toEqual(['q', 'aa', 'ccc', 'bbbb']);
    expect(sortingFn(['aa', 'aa'], compareFn)).toEqual(['aa', 'aa']);
  }

  static stable(sortingFn) {
    const compareFn = (a, b) => {
        if (a.length === b.length) return 0;
        return a.length < b.length ? -1 : 1;
    };

    expect(sortingFn(['bb', 'aa', 'c'], compareFn)).toEqual(['c', 'bb', 'aa']);
    expect(sortingFn(['aa', 'q', 'a', 'bbbb', 'ccc'], compareFn)).toEqual(['q', 'a', 'aa', 'ccc', 'bbbb']);
  }
}
