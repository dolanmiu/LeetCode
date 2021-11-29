/**
 * @param {string} s
 * @return {boolean}
 */
// Time: O(n)
// Space O(n)
var areNumbersAscending = function(s) {
    const arr = s.split(' ');
    
    let curr = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            if (parseInt(arr[i]) > curr) {
                curr = parseInt(arr[i]);
            } else {
                return false;
            }
        }
    }
    
    return true;
};