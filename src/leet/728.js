/*
    A self-dividing number is a number that is divisible by every digit it contains.

    For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

    Also, a self-dividing number is not allowed to contain the digit zero.

    Given a lower and upper number bound, output a list of every possible self dividing number,
    including the bounds if possible.

    Example 1:
    Input:
    left = 1, right = 22
    Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
    Note:

    The boundaries of each input argument are 1 <= left <= right <= 10000.
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
    return [...Array(right - left + 1)]
        .map((_, i) => i + left)
        .filter(n => [...String(n)].map(x => +x).every(x => n % x === 0));

    // 2nd way, better performance
    // const res = [];
    // let l = left;
    //
    // while (l <= right) {
    //     if (isSelfDividing(l)) res.push(l);
    //     l += 1;
    // }
    //
    // return res;
};

// helper for 2nd way
function isSelfDividing(n) {
    let t = n;

    while (t) {
        /*
            t % 10 - check if number has 0 in it,
            n % (t % 10) - check if last digit of t is divider of n
            t = Math.trunc(t / 10) - remove last digit from t e.g. Math.trunc(12 / 10) -> 1
        */
        if (t % 10 === 0 || n % (t % 10) !== 0) return false;
        t = Math.trunc(t / 10);
    }

    return true;
}