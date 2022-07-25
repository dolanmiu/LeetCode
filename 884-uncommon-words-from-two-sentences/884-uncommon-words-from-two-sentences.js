/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
// Space: O(2n)
// Time: O(3n)
var uncommonFromSentences = function(s1, s2) {
    // Space: O(n)
    const words = [...s1.split(' '), ...s2.split(' ')];
    
    const wordMap = words.reduce((acc, curr) => ({
        ...acc,
        [curr]: (acc[curr] ?? 0) + 1,
    }), {});
    
    // Space: O(n)
    const output = [];
    
    for (const [key, value] of Object.entries(wordMap)) {
        if (value === 1) {
            output.push(key);
        }
    }
    
    return output;
};
