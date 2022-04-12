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
var pairSum = function(head) {
    const stack = [];
    
    let currNode = head;
    
    while (currNode !== null) {
        stack.push(currNode);
        
        currNode = currNode.next;
    }
    
    const maxLength = stack.length;
    let i = 0;
    currNode = head;
    
    let maxSum = 0;
    
    while (i < maxLength / 2) {
        const sum = currNode.val + stack.pop().val;
        maxSum = Math.max(maxSum, sum);
        i++;
        currNode = currNode.next;
    }
    
    return maxSum;
};