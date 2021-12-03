/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const largest = strs.reduce((acc, curr) => {
        if (acc.length > curr.length) {
            return acc;
        } else {
            return curr;
        }
    }, 0);
    
    let prefix = '';
    
    for (let i = 0; i < largest.length; i++) {
        let isPrefixChar = true;
        
        let charInQuestion;
        
        for (const w of strs) {
            if (charInQuestion === undefined) {
                charInQuestion = w.charAt(i);
            }
            
            if (w.charAt(i) !== charInQuestion) {
                isPrefixChar = false;
                break;
            }
        }
            
        if (isPrefixChar) {
            prefix += largest[i];
        } else {
            break;
        }
    }
    
    return prefix;
};