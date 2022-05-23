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
// Time: O(n^2) - string concat
// Space: O(n)
let snapshots;
let res;
var findDuplicateSubtrees = function(root) {
    res = [];
    snapshots = new Map();
    
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
    
    snapshots.set(serialised, (snapshots.get(serialised) ?? 0) + 1);
 
    if (snapshots.get(serialised) === 2) {
        res.push(curr);
    }
    
    return serialised;
}