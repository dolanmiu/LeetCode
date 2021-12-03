/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    const arr = [];
    
    for (let i = 0; i < 32; i++) {
        if ((n >> i) & 1 !== 0) {
            arr.push(i);
        }
    }
    
    console.log(arr)
    let max = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        max = Math.max(max, arr[i + 1] - arr[i]);
    }
    
    return max;
};