/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let aFound = undefined;
    let bFound = undefined;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            if (bFound === true) {
                return false;
            }
            aFound = true;
        }
        
        if (s[i] === 'b') {
            if (aFound === false) {
                return false;
            }
            bFound = true;
        }
    }
    
    return true;
};