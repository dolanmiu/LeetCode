/**
 * @param {string[]} timePoints
 * @return {number}
 */
// Time: 
const MAX_TIME = 24 * 60;
var findMinDifference = function(timePoints) {
    const times = timePoints
        .map((s) => s.split(':'))
        .map(([hour, mins]) => [parseInt(hour), parseInt(mins)])
        .map(([hour, mins]) => hour * 60 + mins);
  
    const buckets = Array(MAX_TIME).fill(false);
    
    for (let i = 0; i < times.length; i++) {
        if (buckets[times[i]] === true) {
            return 0;
        }
        
        buckets[times[i]] = true;
    }
    
    let currPos = (times[0] + 1) % MAX_TIME;
    let currDiff = 1;
    let smallestDiff = Number.MAX_VALUE;

    for (let i = 0; i < MAX_TIME; i++) {
        if (buckets[currPos] === true) {
            if (smallestDiff > currDiff) {
                smallestDiff = currDiff;
            }
            currDiff = 0;
        }
        currDiff++;
        currPos++;
        currPos %= MAX_TIME;
    }
    
    return smallestDiff;
    
    
};

