/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    return search(1, n);
};

function search(i, j) {
    if (i >= j) {
        return i;
    }
    const pivot = Math.round((j + i) / 2);

    const dir = guess(pivot);
        console.log(i, j, pivot, dir);

    if (dir === - 1) {
        return search(i, pivot - 1);
    } else if (dir === 1) {
        return search(pivot + 1, j);
    } else {
        return pivot;
    }
}