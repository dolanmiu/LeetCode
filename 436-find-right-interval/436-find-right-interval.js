/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
// Time: O(I * M)
// Space: O(M)
var findRightInterval = function(intervals) {
    const min = intervals.reduce((acc, curr) => Math.min(...curr, acc), Number.MAX_VALUE);
    const max = intervals.reduce((acc, curr) => Math.max(...curr, acc), Number.MIN_SAFE_INTEGER);
    const arr = Array(max - min + 1).fill(undefined).map(() => []);
    
    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        
        arr[start - min] = [...(arr[start - min] ?? []), { belongsTo: i, type: 'start' }];
        arr[end - min] = [...(arr[end - min] ?? []), { belongsTo: i, type: 'end' }];
    }
        
    const output = Array(intervals.length).fill(undefined);
    outerLoop:
    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        
        for (let j = (end - min); j < arr.length; j++) {

            for (let k = 0; k < arr[j].length; k++) {
                const unit = arr[j][k];
      
                
                if (unit.type === 'start') {
                    output[i] = unit.belongsTo;
                    continue outerLoop;
                }
            }
        }
        
        output[i] = -1;
    }
    
    return output;
    
};