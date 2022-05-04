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
 * @return {number[][]}
 */
let leaves;
var findLeaves = function(root) {
    leaves = Array(100).fill().map(() => []);
    let output = dfs(root);
    
    // leaves = leaves.filter(a => a.node !== null);
    // leaves.sort((a, b) => a.level - b.level);
    const filteredLeaves = leaves.filter((a) => a.length > 0);
    console.log(filteredLeaves);
    
    return filteredLeaves;
};

function dfs(node) {
    if (node === null) {
        return {
            level: -1,
            node: null,
        };
    }
    
    const left = dfs(node.left);
    const right = dfs(node.right);
    
    const curr = {
        level: Math.max(left.level, right.level) + 1,
        node: node,
    };
    
    leaves[Math.max(left.level, right.level) + 1].push(node.val)
    
    return curr;
}