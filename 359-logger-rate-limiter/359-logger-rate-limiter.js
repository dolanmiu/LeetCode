
var Logger = function() {
    this.debounce = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
// Time: O(1)
// Space: O(n)
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.debounce.has(message)) {
        if (timestamp >= this.debounce.get(message) + 10) {
            this.debounce.set(message, timestamp);
            return true;
        } else {
            return false;
        }
    } else {
        this.debounce.set(message, timestamp);
        return true;
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */