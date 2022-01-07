/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head = head;
    
    let curr = head;
    this.count = 0;
    
    while (curr !== null) {
        curr = curr.next;
        this.count++;
    }
    
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    const r = Math.floor(Math.random() * this.count);
    
    let curr = this.head;
    
    for (let i = 0; i < r; i++) {
        curr = curr.next;
    }
        
    return curr.val;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */