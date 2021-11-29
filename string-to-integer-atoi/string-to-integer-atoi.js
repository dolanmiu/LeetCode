/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {    
    const stringNumber = str.trim().match(/^([+-]?[0-9]+)/);
    
    if (!stringNumber) {
        return 0;
    } else {
        const num = parseInt(stringNumber, 10);
        return clamp(num, -Math.pow(2, 31), Math.pow(2, 31) -1);
    }
};

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}