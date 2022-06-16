/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }
    
    let curr = head;
    const map = new Map();
    const newMap = new Map();
    
    let index = 0;
    while (curr !== null) {
        map.set(curr, index);
        
        curr = curr.next;
        index++;
    }
    
    const newHead = new Node(head.val);
    let newCurr = newHead;
    curr = head.next;
    
    index = 0;
    while (newCurr !== null) {
        const node = curr ? new Node(curr.val) : null;
        newCurr.next = node;
        newMap.set(index, newCurr);

        newCurr = newCurr.next;
        
        if (curr) {
            curr = curr.next;
        }
        
        index++;
    }
        
    index = 0;
    curr = head;
    newCurr = newHead;
    while (curr !== null) {
        const currRandomIndex = map.get(curr.random) ?? -1;
        const newRandomPointer = newMap.get(currRandomIndex) ?? null;
        
        newCurr.random = newRandomPointer;
        
        curr = curr.next;
        newCurr = newCurr.next;
        index++;
    }
    
    return newHead;
};