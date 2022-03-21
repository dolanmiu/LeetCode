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
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    return dfs(root);
};

function dfs(node) {
    if (node === null) {
        return Number.MAX_VALUE;    
    }
    
    if (node.left === null && node.right === null) {
        return 1;
    }
    
    const left = dfs(node.left);
    const right = dfs(node.right);
    
    return Math.min(left, right) + 1;
    
}