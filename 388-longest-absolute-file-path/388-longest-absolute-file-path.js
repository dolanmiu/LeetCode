/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    const nests = (input.match(new RegExp("\n", "g")) || []).length;
    const currPaths = Array(nests);
    
    const rows = input.split('\n');
    let largest = 0;
    
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const tabCount = (row.match(new RegExp("\t", "g")) ?? []).length;
        const name = row.replaceAll('\t', '');
        const isFile = !!(name.match(/\.[0-9a-z]+$/i) ?? [])[0];
        
        currPaths[tabCount] = name;
        
        if (isFile) {
            const joinedPath = currPaths.slice(0, tabCount + 1).join('/');
            largest = Math.max(largest, joinedPath.length);
        }
    }
    
    return largest;
};