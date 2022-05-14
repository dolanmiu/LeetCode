/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.arr = Array(length).fill(undefined).map(() => new Map());
    this.currSnapshot = 0;
    this.maxSnapshotIndex = Array(length).fill(0);
    this.toBeFlushed = new Map();
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.toBeFlushed.set(index, val);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    for (const [i, val] of this.toBeFlushed) {
        const map = this.arr[i];
        
        map.set(this.currSnapshot, val);
        this.toBeFlushed.delete(i);
        this.maxSnapshotIndex[i] = this.currSnapshot;
        
    }
    
    this.currSnapshot++;
    
    return this.currSnapshot - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    let currIndex = Math.min(snap_id, this.maxSnapshotIndex[index]);
    while (currIndex >= 0) {
        if (this.arr[index].has(currIndex)) {
            return this.arr[index].get(currIndex);
        }
        currIndex--;
    }
    
    return 0;
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */