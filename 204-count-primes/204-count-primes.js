/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n === 0 || n === 1) {
        return 0;
    }
    
    const arr = Array(n).fill(undefined);
    arr[0] = true;
    arr[1] = true;
    let count = 0;
    
    for (let i = 2; i < n; i++) {
        if (arr[i] !== true) {
            count++;
            fillIn(arr, i, n);
        }
        
        
    }
    
    return count;
};

function fillIn(arr, i, n) {
    let curr = i + i;
        
    while (curr < n) {
        arr[curr] = true;
        curr += i;
    }
}