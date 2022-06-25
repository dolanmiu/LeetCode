/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num === 0) {
        return 0;
    }
    
    const output = num % 9;
    
    if (output === 0) {
        return 9;
    } else {
        return output;
    }
};