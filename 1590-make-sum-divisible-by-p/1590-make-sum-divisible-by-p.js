/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
// Time: O(n)
// Space: O(n)
var minSubarray = function(nums, p) {
    const prev = new Map([[0, -1]]);
    const totalSum = nums.reduce((a, b) => a + b);
    const target = mod(totalSum, p);
    
    if (target === 0) {
        return 0;
    }
    
    let currSum = 0;
    console.log('looking for target', target)
    
    // Main loop
    let min = 10**12;
    
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        currSum = mod(currSum, p);
        
        const neededValue = mod(currSum - target, p);
        
        if (prev.has(neededValue)) {
            console.log(i, prev.get(neededValue), neededValue)
            min = Math.min(min, i - prev.get(neededValue));
        }
        
        prev.set(currSum, i);
    };
    
    
    
    if (min >= nums.length) {
        return -1;
    }
    
    return min;
};

function mod(n, m) {
  return ((n % m) + m) % m;
}