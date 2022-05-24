/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const minQueue = new MinPriorityQueue((payload) => payload.effort);
    const visited = new Set(`0-0`);
    minQueue.enqueue([{ i: 0, j: 0, effort: 0 }], 0);
    const queue = [];
    
    while (!minQueue.isEmpty()) {
        const nearestNeighbours = minQueue.dequeue();
        for (const neighbour of nearestNeighbours.element) {
            queue.push(neighbour);
            visited.add(`${neighbour.i}-${neighbour.j}`);
        }
        
        // O(2logn)
        while (queue.length > 0) {
            const curr = queue.shift();

            if (curr.i === heights.length - 1 && curr.j === heights[0].length - 1) {
                return curr.effort;
            }

            const neighbours = getNeighbours(heights, curr, visited);

            const effortMap = neighbours.reduce((acc, curr) => {
                return acc.set(curr.effort, [...(acc.get(curr.effort) ?? []), curr]);
            }, new Map());

            for (const [effort, arr] of effortMap) {
                minQueue.enqueue(arr, effort);
            }
        }
    }
   
    
};

function getNeighbours(heights, node, visited) { 
    const { i, j } = node;
    
    const left = [i - 1, j];
    const right = [i + 1, j];
    const up = [i, j - 1];
    const down = [i, j + 1];
    
    const base = [left, right, up, down]
        .filter(([x, y]) => x >= 0 && x < heights.length && y >= 0 && y < heights[0].length)
        .filter(([x, y]) => !visited.has(`${x}-${y}`));
    
    
    return base.map(([x, y]) => {
        return {
            i: x,
            j: y,
            effort: Math.max(node.effort, Math.abs(heights[i][j] - heights[x][y])),
        };
    });
}