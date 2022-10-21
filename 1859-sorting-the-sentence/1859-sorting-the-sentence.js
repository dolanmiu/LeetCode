/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    // Time: O(n)
    // Space: O(n)
    const words = s.split(' ');
    
    // Space: O(n)
    const res = Array(words.length);
    
    // Time: O(n) = O(w * c)
    // Space: O(n)
    for (let i = 0; i < words.length; i++) {
        const curr = words[i];
        const lastCharIndex = parseInt(curr[curr.length - 1]) - 1;
        
        // Time: O(c)
        const sliced = curr.substring(0, curr.length - 1);
        res[lastCharIndex] = sliced;
    }
    
    // Time: O(n)
    // Space: O(n)
    return res.join(' ');
};