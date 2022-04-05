/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const mainCount = count(n);
    
    outer:
    for (let i = 0; i < 31; i++) {
        const currPow = Math.pow(2, i);
        const currCount = count(currPow);
        
        inner:
        for (let j = 0; j < currCount.length; j++) {
            if (currCount[j] !== mainCount[j]) {
                continue outer;
            }
        }
        
        return true;
    }
    
    return false;
};

function count(n) {
    const output = Array(10).fill(0);
    
    while (n > 0) {
        output[n % 10]++;
        n /= 10;
        n = Math.floor(n);
    }
    
    return output;
}