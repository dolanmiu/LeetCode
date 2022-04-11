/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const pQueue = [p];
    const qQueue = [q];
    
    while (pQueue.length > 0 || qQueue.length > 0) {
        const currP = pQueue.shift();
        const currQ = qQueue.shift();
        
        if (currP === null && currQ === null) {
            continue;
        } else if (currP === null && currQ !== null) {
            return false;
        } else if (currP !== null && currQ === null) {
            return false;
        }
        
        if (currP.val !== currQ.val) {
            return false;
        }
        
        
        pQueue.push(currP.left, currP.right);
        qQueue.push(currQ.left, currQ.right);
        
        

    }
    
    return true;
};