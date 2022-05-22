
var StockPrice = function() {
    this.latestTimestamp = 0;
    this.timeMap = new Map();
    this.minQueue = new MinPriorityQueue();
    this.maxQueue = new MaxPriorityQueue();
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    this.timeMap.set(timestamp, price);

    this.latestTimestamp = Math.max(this.latestTimestamp, timestamp);
    
    const obj = {
        t: timestamp,
        value: price,
    };
    
    this.maxQueue.enqueue(obj, obj.value);
    this.minQueue.enqueue(obj, obj.value);
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.timeMap.get(this.latestTimestamp);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    while(this.maxQueue.size() > 0) {
        const top = this.maxQueue.dequeue().element;
        
        if (this.timeMap.get(top.t) === top.value) {
            this.maxQueue.enqueue(top, top.value);
            
            return top.value;
        }
    }
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    while(this.minQueue.size() > 0) {
        const top = this.minQueue.dequeue().element;
        
        if (this.timeMap.get(top.t) === top.value) {
            this.minQueue.enqueue(top, top.value);
            
            return top.value;
        }
    }
};

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */