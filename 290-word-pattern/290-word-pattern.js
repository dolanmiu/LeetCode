/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const check1 = check(pattern.split(''), s.split(' '));
    const check2 = check(s.split(' '), pattern.split(''));
    
    return check1 && check2;
};

function check(words1, words2) {
    if (words1.length !== words2.length) {
        return false;
    }
    
    const mem = new Map();
    
    for (let i = 0; i < words1.length; i++) {
        const c = words1[i];
        if (mem.has(c)) {
            const word = mem.get(c);
            if (word !== words2[i]) {
                return false;
            }
        } else {
            mem.set(c, words2[i]);
        }
    }
    
    return true;
}