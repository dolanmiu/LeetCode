/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (root === null) {
        return [];
    }
    
    const flatTree = bfs(root);
    const lastLevel = flatTree[flatTree.length - 1].level;
    
    
    const buckets = flatTree.reduce((acc, curr) => {
        acc[curr.level].push(curr.node.val);
        return acc;
    }, Array(lastLevel + 1).fill(undefined).map((_) => []));
    
    console.log(buckets)
    
    const output = buckets.map((bucket) => {
        const largestNumber = bucket.reduce((acc, curr) => Math.max(curr, acc), Number.MIN_SAFE_INTEGER)
        return largestNumber;
    });
    
    return output;
    
};

function bfs(node) {
    const queue = [{ node, level: 0 }];
    const mem = [{ node, level: 0 }];
    
    while (queue.length > 0) {
        const curr = queue.shift();

        const children = [curr.node.left, curr.node.right].filter((a) => !!a);
        
        for (const child of children) {
            queue.push({ node: child, level: curr.level + 1 });
            mem.push({ node: child, level: curr.level + 1 });
        }
        
        
    }
    
    return mem;
}