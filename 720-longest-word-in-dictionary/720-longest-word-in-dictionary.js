/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    const output = dfs(words, 0, '');
    
    let maxCount = 0;
    let maxWord = '';
    
    for (const w of output) {
        if (w.length > maxCount) {
            maxCount = w.length;
            maxWord = w;
        } else if (w.length === maxCount) {
            if (w < maxWord) {
                maxWord = w;
            }
        }
    }
    
    return maxWord;
};

function dfs(words, index, curr) {
    const possibleValues = words
        .filter((a) => a.length === index + 1)
        .filter((a) => a.startsWith(curr));
    
    if (possibleValues.length === 0) {
        return [curr];
    }
    
    let output = [];
    
    for (const p of possibleValues) {
        const r = dfs(words, index + 1, p);
        output = [...output, ...r];
    }
    
    return output;
}