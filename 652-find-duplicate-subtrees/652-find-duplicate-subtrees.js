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
 * @return {TreeNode[]}
 */
let map;
let res;
var findDuplicateSubtrees = function(root) {
    res = [];
    map = new Map();
    
    postOrder(root, res);
    
    return res;
};

function postOrder(curr) {
    if (curr === null) {
        return "#"
    }
    
    const left = postOrder(curr.left);
    const right = postOrder(curr.right);
    
    const serialised = `${curr.val}-${left}-${right}`;
    
    map.set(serialised, (map.get(serialised) ?? 0) + 1);
 
    if (map.get(serialised) === 2) {
        res.push(curr);
    }
    
    return serialised;
}