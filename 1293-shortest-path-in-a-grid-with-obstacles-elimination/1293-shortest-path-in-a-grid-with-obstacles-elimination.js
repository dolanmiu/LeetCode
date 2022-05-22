/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
// Time: O(m*n*k);
// Space: O(m*n*k)
var shortestPath = function(grid, k) {
    
    const queue = [{ i: 0, j: 0, powersUsed: 0, level: 0 }];
    const visited = new Set();
    
    while (queue.length > 0) {
        const curr = queue.shift();
        
        if (curr.i === grid.length - 1 && curr.j === grid[0].length - 1) {
            return curr.level;
        }
        
        const neighbours = getNeighbours(grid, curr, k);
        
        for (const neighbour of neighbours) {
            if (visited.has(getNodeKey(neighbour))) {
                continue;
            }

            queue.push(neighbour);

            visited.add(getNodeKey(neighbour));
        }
        
    }
    
    return -1;
};

function getNeighbours(grid, node, k) {
    const { i, j, powersUsed, level } = node;
    const left = [i + 1, j];
    const right = [i - 1, j];
    const up = [i, j - 1];
    const down = [i, j + 1];
    
    const base = [left, right, up, down]
        .filter(([x, y]) => x >= 0 && x < grid.length && y >= 0 && y < grid[0].length);

    const newNodes = base
        .map(([x, y]) => {
            const isWall = grid[x][y] === 1;

            return {
                i: x,
                j: y,
                powersUsed: powersUsed + (isWall ? 1 : 0),
                level: level + 1,
            };
        })
        .filter(({ powersUsed }) => powersUsed <= k);
    
    return newNodes;
}
    
function getNodeKey(node) {
    return `${node.i}-${node.j}-${node.powersUsed}`;
}