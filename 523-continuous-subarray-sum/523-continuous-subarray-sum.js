/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  
    const map = new Map([
        [0 , -1],
    ]);
    
    let runningSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        runningSum %= k;
        const currRunningSum = runningSum % k;
        const possibleIndex = map.get(currRunningSum);

        if (possibleIndex !== undefined) {
            if (i - possibleIndex > 1) {
                return true;
            }
        } else {
            map.set(currRunningSum, i);
        }
        
        runningSum = currRunningSum;
    }
    
    return false;
};