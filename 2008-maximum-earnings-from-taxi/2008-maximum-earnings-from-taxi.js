/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
// Time: O(n)
let mem;
var maxTaxiEarnings = function(n, rides) {
    mem = new Map();
    rides.sort((a, b) => a[0] - b[0]);
    const output = dfs(rides, 0);
    
    return output;
};

function dfs(rides, index) {
    if (index >= rides.length) {
        return 0;
    }
    
    if (mem.has(index)) {
        return mem.get(index);
    }
  
    const [start, end, tips] = rides[index];
    
    const profit = end - start + tips;
    
    const nextIndex = search(rides, index);
    const res = dfs(rides, nextIndex) + profit;
    const skipCurr = dfs(rides, index + 1);

    // for (let i = index + 1; i < rides.length; i++) {
    //     const [nextStart] = rides[i];
    //     if (end > nextStart) {
    //         continue;
    //     }
    //     const res = dfs(rides, i) + profit;
    //     output.push(res);
    // }
    
    const highestProfit = Math.max(skipCurr, res);
    
    mem.set(index, highestProfit);
    
    return highestProfit;
}

function search(rides, index) {
    let left = 0;
    let right = rides.length;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        const [nextStart] = rides[mid];
        const [, currEnd] = rides[index];
        
        if (nextStart >= currEnd) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}