/**
 * @param {number[][]} matrix
 * @return {number}
 */
// Time: O(n*m)
// Space: O(n*m)
let mem;
var longestIncreasingPath = function(matrix) {
    mem = new Map();
    
    let max = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            max = Math.max(max, dfs(matrix, i, j, new Set()));
        }
    }
    
    return max;
};

function dfs(matrix, i, j) {
    
    if (mem.has(`${i}-${j}`)) {
        return mem.get(`${i}-${j}`);
    }
    
    const neighbours = getNeighbours(matrix, i, j);
    
    if (neighbours.length === 0) {
        mem.set(`${i}-${j}`, 1);
        return 1;
    }
    
    let max = 0;
    
    for (const neighbour of neighbours) {
        const [nextI, nextJ] = neighbour;
        
        const res = dfs(matrix, nextI, nextJ);
        max = Math.max(max, res);
    }
    
    mem.set(`${i}-${j}`, max + 1);
    return max + 1;
}

function getNeighbours(matrix, i, j) {
    const left = [i - 1, j];
    const right = [i + 1, j];
    const up = [i, j - 1];
    const down = [i, j + 1];
    
    return [left, right, up, down]
        .filter(([x, y]) => x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length)
        .filter(([x, y]) => matrix[x][y] > matrix[i][j]);
}