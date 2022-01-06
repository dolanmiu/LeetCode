/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const leftHead = new ListNode(0, null);
    const rightHead = new ListNode(0, null);
    let leftCurr = leftHead;
    let rightCurr = rightHead;
    
    let curr = head;
    
    while (curr !== null) {
        if (curr.val < x) {
            leftCurr.next = curr;
            leftCurr = curr;
        } else {
            rightCurr.next = curr;
            rightCurr = curr;
        }
        curr = curr.next;
    }
    rightCurr.next = null;
    console.log(leftHead, rightHead)
    
    leftCurr.next = rightHead.next;
    
    return leftHead.next;
};