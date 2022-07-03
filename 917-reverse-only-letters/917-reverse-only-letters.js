/**
 * @param {string} s
 * @return {string}
 */
// Time: O(3n)
// Space: O(n)
var reverseOnlyLetters = function(s) {
    const output = Array(s.length);
    
    let str = '';
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (/[a-z]/gi.test(s[i])) {
            str += s[i];
        } else {
            output[i] = s[i];
        }
    }
    
    let strIndex = 0;
    
    for (let i = 0; i < output.length; i++) {
        if (output[i] === undefined) {
            output[i] = str[strIndex];
            strIndex++;
        }
    }
    
    return output.join('');
};