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
var sumOfLeftLeaves = function(root) {
    const output = dfs(root, 'right');
    
    return output;
};

function dfs(node, parentDir) {
    if (node === null) {
        return 0;
    }
    
    if (node.left === null && node.right === null) {
        if (parentDir === 'left') {
            return node.val;
        } else {
            return 0;
        }
    }
    
    const left = dfs(node.left, 'left');
    const right = dfs(node.right, 'right');
    

    return left + right;
}