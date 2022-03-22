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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    if (root === null) {
        return null;    
    }
    
    const words = dfs(root);
    
    words.sort((a, b) => a.localeCompare(b));
    
    return words[0];
};

function dfs(node) {
    
    if (node === null) {
        return [];
    }
    
    if (node.left === null && node.right === null) {
        return [String.fromCharCode(node.val + 97)];
    }
    
    const left = dfs(node.left);
    const right = dfs(node.right);
    
    const res = [...left, ...right];
    
    return res.map((r) => `${r}${String.fromCharCode(node.val + 97)}`);
}