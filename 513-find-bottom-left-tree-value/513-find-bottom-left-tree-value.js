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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    return bfs(root);
};

function bfs(root) {
    const queue = [{ node: root, level: 0 }];
    const cache = [];
    
    while (queue.length > 0) {
        const curr = queue.shift();
        cache.push(curr);
        
        if (curr.node.left) {
            queue.push({ node: curr.node.left, level: curr.level + 1 });
        }
        
        if (curr.node.right) {
            queue.push({ node: curr.node.right, level: curr.level + 1 });
        }
    }
    
    let highestLevel = 0;

    for (let i = 0; i < cache.length; i++) {
        highestLevel = Math.max(cache[i].level);
    }
    
    
    
    for (let i = 0; i < cache.length; i++) {
        if(cache[i].level === highestLevel) {
            return cache[i].node.val;
        }
    }
}