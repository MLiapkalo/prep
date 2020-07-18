export class Comparator {
    constructor(compareFn) {
        this.compareFn = compareFn || Comparator.defaultCompareFn;
    }

    static defaultCompareFn(a, b) {
        if (a === b) return 0;
        return a > b ? 1 : -1;
    }

    less = (a, b) => this.compareFn(a, b) < 0;

    greater = (a, b) => this.compareFn(a, b) > 0;

    equal = (a, b) => this.compareFn(a, b) === 0;

    lessOrEqual = (a, b) => this.compareFn(a, b) <= 0;

    greaterOrEqual = (a, b) => this.compareFn(a, b) >= 0;
}