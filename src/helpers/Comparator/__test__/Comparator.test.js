import { Comparator } from '..';

// TODO: finish tests

describe('Comparator', () => {
    let comparator;

    describe('with default compare function', () => {
        beforeAll(() => {
            comparator = new Comparator();
        });
    
        describe('comparator.greater', () => {
            test('should return true if a > b, a = 2, b = 1', () => {
                expect(comparator.greater(2, 1)).toBeTruthy();
            });

            test('should return false if a < b, a = 1, b = 2', () => {
                expect(comparator.greater(1, 2)).toBeFalsy();
            });

            
            test('should return false if a === b, a = 1, b = 1', () => {
                expect(comparator.greater(1, 1)).toBeFalsy();
            });
        });

        describe('comparator.less', () => {
            test('should return true if a < b, a = 1, b = 2', () => {
                expect(comparator.less(1, 2)).toBeTruthy();
            });

            test('should return false if a > b, a = 2, b = 1', () => {
                expect(comparator.less(2, 1)).toBeFalsy();
            });

            
            test('should return false if a === b, a = 1, b = 1', () => {
                expect(comparator.less(1, 1)).toBeFalsy();
            });
        });

        describe('comparator.equal', () => {
            test('should return true if a === b, a = 1, b = 1', () => {
                expect(comparator.equal(1, 1)).toBeTruthy();
            });

            test('should return false if a !== b, a = 2, b = 1', () => {
                expect(comparator.equal(2, 1)).toBeFalsy();
            });
        });

        describe('comparator.lessOrEqual', () => {
            test('should return true if a <= b, a1 = 1, b1 = 1; a2 = 0, b2 = 1', () => {
                expect(comparator.lessOrEqual(1, 1)).toBeTruthy();
                expect(comparator.lessOrEqual(0, 1)).toBeTruthy();
            });

            test('should return false if a > b, a = 2, b = 1', () => {
                expect(comparator.lessOrEqual(2, 1)).toBeFalsy();
            });
        });

        describe('comparator.greaterOrEqual', () => {
            test('should return true if a >= b, a1 = 1, b1 = 1; a2 = 1, b2 = 0', () => {
                expect(comparator.greaterOrEqual(1, 1)).toBeTruthy();
                expect(comparator.greaterOrEqual(1, 0)).toBeTruthy();
            });

            test('should return false if a < b, a = 0, b = 1', () => {
                expect(comparator.greaterOrEqual(0, 1)).toBeFalsy();
            });
        });
    })
});