/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) {
        return null;
    }
    
    const queue = [{ node: root, level: 0 }];
    let prev;
    
    while (queue.length > 0) {
        const payload = queue.shift();
        
        if (prev) {
            if (prev.level === payload.level) {
                prev.node.next = payload.node;
            }
        }
                
        if (payload.node.left) {
            queue.push({ node: payload.node.left, level: payload.level + 1 });
        }
        
        if (payload.node.right) {
            queue.push({ node: payload.node.right, level: payload.level + 1 });
        }

        
        prev = payload;
    }
    
    return root;
};