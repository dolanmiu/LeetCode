/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let sum = 0;
    let columns = 1;
    
    for (let i = 0; i < s.length; i++) { // sum = 100
        const char = s[i];
        const widthIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
        const testSum = sum + widths[widthIndex]; // testSum = 110
        
        if (testSum > 100) {
            sum = widths[widthIndex]; // 10
            columns++; // columns = 1
        } else {
            sum = testSum; // sum = 100
        }
    }
    
    return [columns, sum];
};