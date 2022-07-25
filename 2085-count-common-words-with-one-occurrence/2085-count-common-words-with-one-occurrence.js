/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
// Time: O(w1 + w2)
// Space: O(w1 + w2)
var countWords = function(words1, words2) {
    const words1Map = words1.reduce((acc, curr) => ({
        ...acc,
        [curr]: (acc[curr] ?? 0) + 1,
    }), {});
    
    const words2Map = words2.reduce((acc, curr) => ({
        ...acc,
        [curr]: (acc[curr] ?? 0) + 1,
    }), {});
    
    let output = 0;
    
    for (const [key, value] of Object.entries(words1Map)) {
        if (value === 1 && words2Map[key] === 1) {
            output++;
        }
    }
    
    return output;
};