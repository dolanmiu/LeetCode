/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (head.next === null) {
        return null;
    }
    
    let slow = head;
    let fast = head;
    let prev;
    
    while (fast.next !== null) {
        prev = slow;
        slow = slow.next;
        
        fast = fast.next;

        fast = fast.next;
        if (fast === null) {
            break;
        }
    }
    console.log(prev)
    prev.next = slow.next;
    
    return head;
};