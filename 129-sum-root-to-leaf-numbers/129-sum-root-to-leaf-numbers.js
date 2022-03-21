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
var sumNumbers = function(root) {
    const res = dfs(root);
    return res.reduce((acc, curr) => curr.val + acc, 0);
};

function dfs(node) {
    if (node === null) {
        return [];
    }
    
    if (node.left === null && node.right === null) {
        return [{ val: node.val, radix: 1 }];
    }
    
    const left = dfs(node.left);
    const right = dfs(node.right);
    
    const res = [...left, ...right];
    
    return res.map((r) => {
        return {
            val: r.val + node.val * Math.pow(10, r.radix),
            radix: r.radix + 1,
        }
    });
}