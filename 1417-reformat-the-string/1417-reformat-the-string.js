/**
 * @param {string} s
 * @return {string}
 */
// Time: O(n)
// Space: O(n)
var reformat = function(s) {
    // Space: O(n)
    const charArr = [];
    const digitArr = [];
    
    // Space: O(1)
    // Time: O(n)
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (isNaN(char)) {
            charArr.push(char);
        } else {
            digitArr.push(char);
        }
    }
    
    // Time: O(1)
    // Space: O(1)
    if (Math.abs(charArr.length - digitArr.length) >= 2) {
        return '';
    }
    
    // It is possible
    // Now create the string
    const largerArr = charArr.length >= digitArr.length ? charArr : digitArr;
    const smallerArr = charArr.length >= digitArr.length ? digitArr : charArr;
    
    // Space O(n)
    const output = [];
    
    // Time: O(n)
    for (let i = 0; i < largerArr.length; i++) {
        output.push(largerArr[i]);
        
        if (smallerArr[i]) {
            output.push(smallerArr[i]);
        }
    }
    
    // Time: O(n)
    // Space: O(n)
    return output.join('');
};