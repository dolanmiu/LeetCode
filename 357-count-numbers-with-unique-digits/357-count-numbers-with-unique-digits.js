/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) {
        return 1;
    }
    
    let output = 10;
    let curr = 9;
    
    for (let i = 0; i < n - 1; i++) {
        curr *= (9 - i);
        output += curr;
        
    }
    
    return output;
};