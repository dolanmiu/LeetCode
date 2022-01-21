/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Time: O(L1 > L2 ? L1 : L2);
// Space: O(L1 + L2);
var addTwoNumbers = function(l1, l2) {
    let curr1 = l1;
    let curr2 = l2;
    let carryOver = 0;
    
    const head = new ListNode(-1); // dummy one
    let currOutput = head;
    
    while (curr1 !== null || curr2 !== null || carryOver > 0) {
        const res = (curr1 ? curr1.val : 0) + (curr2 ? curr2.val : 0) + carryOver;
        const newNode = new ListNode(res % 10);
        
        currOutput.next = newNode;
        currOutput = currOutput.next;
        carryOver = res >= 10 ? 1 : 0;
        curr1 = curr1 ? curr1.next : null;
        curr2 = curr2 ? curr2.next : null;
    }
    
    return head.next;
};