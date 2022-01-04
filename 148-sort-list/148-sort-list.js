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
var sortList = function(head) {
    return mergeSort(head);
};

function mergeSort(head) {
    if (head === null) {
        return null;
    }
    
    if (head.next === null) {
        return head;
    }
    
    const { left, right } = splitList(head);
    const leftOutput = mergeSort(left);
    const rightOutput = mergeSort(right);
    
    const sortedList = mergeLists(leftOutput, rightOutput);
    
    return sortedList;
}

function splitList(head) {
    if (head.next === null) {
        return {
            left: null,
            right: null
        };
    }
    
    let curr = head;
    let prev;
    let fastCurr = head;
    
    while (fastCurr !== null) {
        prev = curr;
        curr = curr.next;
        fastCurr = fastCurr.next ? fastCurr.next.next : null;
    }
    
    const list2Head = curr;
    prev.next = null;
    
    return {
        left: head,
        right: list2Head
    }
}

function mergeLists(leftHead, rightHead) {
    let currLeft = leftHead;
    let currRight = rightHead;
    
    let curr = new ListNode(0, null);
    let head = curr;
    
    while (currLeft !== null || currRight !== null) {
        if ((currLeft ? currLeft.val : Number.MAX_VALUE) > (currRight ? currRight.val : Number.MAX_VALUE)) {
            curr.next = currRight;
            currRight = currRight.next;
        } else {
            curr.next = currLeft;
            currLeft = currLeft.next;
        }
        curr = curr.next;
    }
        
    return head.next;
}