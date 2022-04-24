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
var oddEvenList = function(head) {
    if (head === null) {
        return null;
    }
    
    if (head.next === null) {
        return head;
    }
    
    let oddHead = new ListNode(-1);
    let evenHead = new ListNode(-1);
    
    let currOdd = oddHead;
    let currEven = evenHead;
    let prevOdd;
    let prevEven;
    
    let curr = head;
    
    let count = 0;
    
    while (curr !== null) {
        if (count % 2 === 0) {
            currOdd.next = curr;
            currOdd = currOdd.next;
            prevOdd = curr;
        } else {
            currEven.next = curr;
            currEven = currEven.next;
            prevEven = curr;
        }
        curr = curr.next;
        currEven.next = null;
        currOdd.next = null;
        count++;
    }
    
    currOdd.next = evenHead.next;
    
    return oddHead.next;
    
    
};