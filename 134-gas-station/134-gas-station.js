/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// Time: O(n)
// Space: O(n)
var canCompleteCircuit = function(gas, cost) {
    const gasSum = gas.reduce((acc, curr) => acc + curr);
    const costSum = cost.reduce((acc, curr) => acc + curr);
    
    if (costSum > gasSum) {
        return -1;
    }
    
    // A solution definately exists from here on out
    
    const diff = gas.map((g, i) => {
        return g - cost[i]; 
    });
        
    let total = 0;
    let candidate = 0;
    
    for (let i = 0; i < diff.length; i++) {
        const curr = total + diff[i];
        
        if (curr < 0) {
            total = 0;
        } else {
            if (total === 0) {
                candidate = i;
            }
            total += diff[i];
        }
        
        
    }
    
    return candidate;
};
