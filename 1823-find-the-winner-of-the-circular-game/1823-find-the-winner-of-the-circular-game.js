/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    const arr = Array(n).fill().map((_, i) => i + 1);
    
    let currIndex = absMod(n - 1, arr.length);
    while (arr.length > 1) {
        currIndex += k;
        currIndex %= arr.length;
        arr.splice(currIndex, 1);
        currIndex = absMod(currIndex - 1, arr.length);
    }
    
    return arr[0];
};

function absMod(num, n) {
    return ((num % n) + n) % n;
};