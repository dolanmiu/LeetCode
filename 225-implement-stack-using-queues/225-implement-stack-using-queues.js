
var MyStack = function() {
    this.queues = [[], []];
    this.currQueue = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    const queue = this.queues[this.currQueue];
    
    queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    const queue1 = this.queues[this.currQueue];
    const queue2 = this.queues[this.currQueue === 1 ? 0 : 1];
    flushQueue(queue1, queue2);
    
    const val = queue1.shift();
    this.currQueue = this.currQueue === 1 ? 0 : 1;
    
    return val;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const queue1 = this.queues[this.currQueue];
    const queue2 = this.queues[this.currQueue === 1 ? 0 : 1];
    flushQueue(queue1, queue2);
    
    return queue1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queues[0].length === 0 && this.queues[1].length === 0;
};

function flushQueue(queue1, queue2) {
    while (queue1.length > 1) {
        const val = queue1.shift();
        queue2.push(val);
    }
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */