/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    
    let curr = head;
    let prev = null;
    
    while (curr !== null) {
        const currCurr = curr;
        curr = curr.next;
        currCurr.next = prev;
        prev = currCurr;
    }
    curr = prev
    let sum = 0;
    let power = 0;
    while (curr !== null) {
        sum += curr.val === 1 ? Math.pow(2, power) : 0;
        power++;
        curr = curr.next;
    }
    
    return sum;
    
};