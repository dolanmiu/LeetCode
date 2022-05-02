/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const output = [];
    let [newStart, newEnd] = newInterval;
    
    for (let i = 0; i < intervals.length; i++) {
        const [currStart, currEnd] = intervals[i];
        
        if (newEnd < currStart) {
            // If the current one passes the interval
            return [...output, [newStart, newEnd], ...intervals.slice(i)];
        } else if (newStart > currEnd) {
            // If the interval is greater than the current one - further ahead
            // Regular case, push the original items as per normal
            output.push([currStart, currEnd]);

        } else {
            // If neither of those conditions are true, then we are sure to have an overlap
            // Combine and create a new interval
            newStart = Math.min(newStart, currStart);
            newEnd = Math.max(newEnd, currEnd);
        }
    }
    console.log(output)
    // In case it is at the very end
    output.push([newStart, newEnd]);
    return output;
}
// var insert = function(intervals, newInterval) {
//     let currNewInterval = newInterval;
//     const output = [];
//     let isOverlapping = false;
    
//     if (intervals.length === 0) {
//         console.log('what')
//         return [newInterval];
//     }
    
//     if (isEntirelyBefore(intervals[0], newInterval)) {
//         return [newInterval, ...intervals];
//     }
    
//     if (isEntirelyAfter(intervals[intervals.length - 1], newInterval)) {
//         return [...intervals, newInterval];
//     }
    
//     for (let i = 0; i < intervals.length; i++) {
//         const currInterval = intervals[i];
        
//         if (isOverlaping(currInterval, currNewInterval)) {
//             currNewInterval = getCombinedInterval(currInterval, currNewInterval);
//             isOverlapping = true;
//             continue;
//         }
        
//         if (isOverlapping) {
//             isOverlapping = false;
//             output.push(currNewInterval);
//         }
        
//         output.push(currInterval);
//     }
    
//     if (isOverlapping) {
//         isOverlapping = false;
//         output.push(currNewInterval);
//     }
    
//     return output;
// }

// function isOverlaping(interval1, interval2) {
//     if (interval2[1] >= interval1[0] && interval1[1] >= interval2[0]) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function getCombinedInterval(interval1, interval2) {
//     return [
//         Math.min(interval1[0], interval2[0]),
//         Math.max(interval1[1], interval2[1]),
//     ]
// }

// function isEntirelyBefore(interval1, interval2) {
//     if (interval1[0] > interval2[1]) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isEntirelyAfter(interval1, interval2) {
//     if (interval2[0] > interval1[1]) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var insert = function(intervals, newInterval) {
//     let newStart;
//     let newEnd;
//     const output = [];
    
//     if (newInterval[0] < intervals[0][0]) {
//         newStart = newInterval[0];
//     }
    
//     for (let i = 0; i < intervals.length; i++) {
//         const [start, end] = intervals[i];
        
//         if (newInterval[0] >= start && newInterval[0] <= end) {
//             newStart = start;
//         }
        
//         if (newInterval[1] >= start && newInterval[1] <= end) {
//             newEnd = end;
            
//             output.push([newStart, newEnd]);
            
//             newStart = undefined;
//             newEnd = undefined;
//         }
        
//         if (newStart === undefined && newEnd === undefined) {
//             output.push([start, end]);
//         }
//     }
    
//     if (newInterval[1] > intervals[intervals.length - 1][1]) {
//         newEnd = newInterval[1];
//         output.push([newStart, newEnd]);
//     }
    
//     return output;
// };