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
var insertionSortList = function(head) {
    let newHead = new ListNode(-6000);
    
    let curr = head;
    while (curr !== null) {

        let currInner = newHead;
        let nextNext = curr.next;
        inner:
        while (currInner !== null) {
            
            const currVal = currInner.next ? currInner.next.val : 9999;
            if (currVal > curr.val) {
                let tempNext = currInner.next;
                currInner.next = curr;
                curr.next = tempNext;
                
                break inner;
            } else {
                currInner = currInner.next;
            }
        }
        
        curr = nextNext;
    }
    return newHead.next;
};