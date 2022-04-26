/**
 * @param {number[][]} triangle
 * @return {number}
 */
let mem;
var minimumTotal = function(triangle) {
    mem = new Map();
    const output = dfs(triangle, 0, 0);
    
    return Math.min(...output);
};

function dfs(arr, level, column) {
    if (mem.has(`${level}-${column}`)) {
        return mem.get(`${level}-${column}`);
    }
    
    if (level === arr.length - 1 && arr[level][column] !== undefined) {
        return [arr[level][column]];
    }
    
    if (level > arr.length - 1) {
        return [];
    }
    
    if (column > arr[level].length - 1) {
        return [];
    }
    
    const left = dfs(arr, level + 1, column);
    const right = dfs(arr, level + 1, column + 1);
    const total = [...left, ...right];
    
    const output = total.map((a) => {
        const res = a + arr[level][column];

        return res;
    });
    
    mem.set(`${level}-${column}`, [Math.min(...output)]);

    return output;
}
