// r/2 (r + 1) = n
// r^2/2 + r/2 = n
// r^2 + r = 2n
// r(r + 1) = 2n
// 
/**
 * @param {number} n
 * @return {number}
 */
let res;
var arrangeCoins = function(n) {
    res = 1;
    const output = search(1, n, n);
    
    return res;
};


const search = (left, right, n) => {
    if (left > right) {
        return;
    }
    
    const mid = Math.floor(left + ((right - left) / 2));
    
    const currSum = findSum(mid);
    if (currSum === n) {
        res = mid;
        return;
    }
    
    if (currSum > n) {
        search(left, mid - 1, n);
    } else {
        res = Math.max(res, mid);
        search(mid + 1, right, n);
    }
    
}

const findSum = (row) => {
    const res = (row / 2) * (row + 1);
    
    return res;
}