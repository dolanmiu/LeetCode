/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// Time: O(n + e)
// Space: O(3n)
var cloneGraph = function(node) {
    if (node === null) {
        return null;
    }
    
    const dummy = new Node(-1, [node]);
    const root = new Node(-1);
    
    const visited = new Set([]);
    const nodeMap = new Map();
    const copyNodeMap = new Map();
    
    const queue = [dummy];
    
    while (queue.length > 0) {
        const curr = queue.shift();
        nodeMap.set(curr.val, curr);


        for (const neighbour of curr.neighbors) {
            if (visited.has(neighbour)) {
                continue;
            }
            
            const newNeighbour = new Node(neighbour.val);
            copyNodeMap.set(newNeighbour.val, newNeighbour);
            
            queue.push(neighbour);
            visited.add(neighbour);
        }
        
    }
        console.log(nodeMap, copyNodeMap)

    
    for (const [key, currNode] of nodeMap) {
        if (key === -1) {
            continue;
        }
        const curr = copyNodeMap.get(key);
        console.log(currNode)
        
        curr.neighbors = currNode.neighbors.map((neighbor) => {
            return copyNodeMap.get(neighbor.val);
        });
    }    
    
    console.log(nodeMap, copyNodeMap)

    
    return copyNodeMap.get(1);
};

