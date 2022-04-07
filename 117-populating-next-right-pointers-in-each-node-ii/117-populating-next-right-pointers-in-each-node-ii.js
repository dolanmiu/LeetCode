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
        const current = queue.shift();
        
        if (prev) {
            if (prev.level === current.level) {
                prev.node.next = current.node;
            }
        }
        
        console.log(current, prev)
        
        if (current.node.left) {
            queue.push({ node: current.node.left, level: current.level + 1 });
        }
        
        if (current.node.right) {
            queue.push({ node: current.node.right, level: current.level + 1 });
        }
        
        prev = current;
    }
    
    return root;
};