
var MyCalendar = function() {
    this.arr = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for (const [eventStartTime, eventEndTime] of this.arr) {
        if (eventStartTime < end && start < eventEndTime) {
            return false;
        }
    }
    
    this.arr.push([start, end]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */