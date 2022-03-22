/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    return dfs(s.toLowerCase(), 0, '');
};

function dfs(str, index, curr) {
    if (index >= str.length) {
        return [curr];
    }
    
    let output;
    
    if (!isNaN(str.charAt(index))) {
        output = dfs(str, index + 1, `${curr}${str.charAt(index)}`);
    } else {
        const left = dfs(str, index + 1, `${curr}${str.charAt(index)}`);
        const right = dfs(str, index + 1, `${curr}${str.charAt(index).toUpperCase()}`);
        output = [...left, ...right];
    }
    
    return output;
}
