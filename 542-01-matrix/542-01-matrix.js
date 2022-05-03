/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// Time: O(n*m)
let mem;
var updateMatrix = function(mat) {
    mem = Array(mat.length).fill(undefined).map((_, i) => Array(mat[i].length).fill(undefined));
    
    return bfs(mat);
};

function bfs(mat) {
    const queue = [];
    const visited = new Set();
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 0) {
                queue.push({ node: [i, j], val: 0 });
                mem[i][j] = 0;
                visited.add(`${i}-${j}`);
            }
        }
    }
    
    while (queue.length > 0) {
        const curr = queue.shift();
        
        const neighbours = getNeighbours(mat, ...curr.node);
        for (const neighbour of neighbours) {
            if (visited.has(`${neighbour[0]}-${neighbour[1]}`)) {
                continue;
            }
            queue.push({ node: neighbour, val: curr.val + 1 });
            mem[neighbour[0]][neighbour[1]] = curr.val + 1;
            visited.add(`${neighbour[0]}-${neighbour[1]}`);
        }
    }
    
    return mem;
}

// function dfs(mat, i, j, visited) {
//     if (mat[i][j] === 0) {
//         mem[i][j] = 0;
//         return 0;
//     }
    
//     if (mem[i][j] !== undefined) {
//         return mem[i][j];
//     }
    
//     if (visited.has(`${i}-${j}`)) {
//         console.log('skipping', `${i}-${j}`);
//         return 10000;
//     }
    
//     visited.add(`${i}-${j}`);
    
//     const neighbours = getNeighbours(mat, i, j);
    
//     let min = 10000;
//     for (const neighbour of neighbours) {
//         visited.add(`${neighbour[0]}-${neighbour[1]}`)   
//     }
    
//     for (const neighbour of neighbours) {
//         const res = dfs(mat, neighbour[0], neighbour[1], new Set([...visited])) + 1;
//         console.log(res, res - 1, 'i', i, j)
//         min = Math.min(min, res);
//     }
    
//     mem[i][j] = min ?? 0;
//     console.log('returning', min ?? 0, i, j)
    
//     return min;
    
// }

function getNeighbours(mat, i, j) {
    const left = [i - 1, j];
    const right = [i + 1, j];
    const up = [i, j - 1];
    const down = [i, j + 1];
    
    return [left, right, up, down].filter(([x, y]) => {
        return x >= 0 && x < mat.length && y >= 0 && y < mat[0].length;
    });
}