/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const queue = [[0, 0]];
    const stuckMap = new Map();
    const visited = new Set([`0-0`]);
    
    const largestHeight = grid.reduce((acc, curr, i) => Math.max(acc, curr.reduce((a, c) => Math.max(a, c))), 0);
    
    for (let waterLevel = grid[0][0]; waterLevel <= largestHeight; waterLevel++) {
        
        if (queue.length === 0) {
            if (stuckMap.has(waterLevel)) {
                console.log('adding to queue')
                queue.push(...stuckMap.get(waterLevel));
            }
        }
                
        while (queue.length > 0) {
            const curr = queue.shift();
            if (curr[0] === grid.length - 1 && curr[1] === grid[0].length - 1) {
                return waterLevel;
            }
            
            const neighbours = getNeighbours(grid, curr[0], curr[1], waterLevel);
            
            for (const neighbour of neighbours.pass) {
                if (visited.has(`${neighbour[0]}-${neighbour[1]}`)) {
                    continue;
                }
                
                queue.push(neighbour);
                
                visited.add(`${neighbour[0]}-${neighbour[1]}`);
            }
            
            for (const neighbour of neighbours.stuck) {
                if (visited.has(`${neighbour[0]}-${neighbour[1]}`)) {
                    continue;
                }
                
                stuckMap.set(grid[neighbour[0]][neighbour[1]], [...(stuckMap.get(grid[neighbour[0]][neighbour[1]]) ?? []), neighbour]);
                
                visited.add(`${neighbour[0]}-${neighbour[1]}`);
            }
        }
        
    }
    return largestHeight;
};

function getNeighbours(grid, i, j, threshold) {
    const left = [i - 1, j];
    const right = [i + 1, j];
    const up = [i, j - 1];
    const down = [i, j + 1];
    
    const base = [left, right, up, down]
        .filter(([x, y]) => x >= 0 && x < grid.length && y >= 0 && y < grid[0].length);
    
    const pass = base
        .filter(([x, y]) => grid[x][y] <= threshold);
    
    const stuck = base
        .filter(([x, y]) => grid[x][y] > threshold);
        
    return {
        pass, stuck,
    }
}