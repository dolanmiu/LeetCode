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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
let res;
let startVal;

var getDirections = function(root, startValue, destValue) {
    const startPath = traverse(root, startValue, '');
    const endPath = traverse(root, destValue, '');
    
    let lca;
    for (let i = 0; i < Math.max(startPath.length, endPath.length); i++) {
        console.log(startPath[i], endPath[i])
        if (startPath[i] !== endPath[i]) {
            lca = i;
            break;
        }
    }
    
    const startOnly = startPath.substring(lca);
    const endOnly = endPath.substring(lca);
    
    const startUs = Array(startOnly.length).fill('U').join('');
    console.log(startUs, startPath, endPath, lca)
    
    const output = startUs + endOnly;
    
    return output;
};

function traverse(node, target, steps) {
    if (node === null) {
        return null;
    }
    
    if (node.val === target) {
        return steps;
    }
    
    const left = traverse(node.left, target, steps + 'L');
    const right = traverse(node.right, target, steps + 'R');
    
    return left ?? right;
}