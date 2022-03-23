/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let currCount = 1;
    let maxCount = 1;
    let prevChar = s.charAt(0);
    
    for (let i = 1; i < s.length; i++) {
        const char = s.charAt(i);
        
        if (char === prevChar) {
            currCount++;
        } else {
            currCount = 1;
        }
        
        maxCount = Math.max(maxCount, currCount);
        
        prevChar = char;
    }
    
    return maxCount;
};