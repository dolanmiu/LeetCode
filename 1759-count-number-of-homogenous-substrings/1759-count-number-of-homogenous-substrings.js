/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let currCount = 1;
    let currMax = 1;
    let prevChar = s.charAt(0);
    
    for (let i = 1; i < s.length; i++) {
        const currChar = s.charAt(i);
        
        if (currChar === prevChar) {
            currCount++;
        } else {
            currCount = 1;
        }
        
        currMax += currCount;
        
        prevChar =  currChar;
    }
    
    return currMax % (Math.pow(10, 9) + 7);
};