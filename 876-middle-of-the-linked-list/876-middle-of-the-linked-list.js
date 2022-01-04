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
// Time: O(n * 2);
// Space: O(1)
var middleNode = function(head) {
    let curr = head;
    
    let count = 0;
    
    while (curr != null) {
        curr = curr.next;
        count++;
    }
    
    curr = head;
    console.log(count, count/2)
    
    for (let i = 0; i < getMidValue(count); i++) {
        curr = curr.next;
    }
    
    return curr;
};

function getMidValue(count) {
    const mid = count / 2;
    const isWholeNumber = mid % 1 === 0;
    
    if (isWholeNumber) {
        return mid;
    } else {
        return Math.floor(mid);
    }
}