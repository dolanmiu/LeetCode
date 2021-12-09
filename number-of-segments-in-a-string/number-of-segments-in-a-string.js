/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if (s === '') {
        return 0;
    }
    
    return s.split(' ').filter((e) => e !== '').length;
};