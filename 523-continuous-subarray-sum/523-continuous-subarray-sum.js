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
        
        const prev = map.get(runningSum);

        if (prev !== undefined) {
                                console.log(i, prev, runningSum);

            if (i - prev > 1) {
                return true;
            }
        } else {
            map.set(runningSum, i);
        }
    }
    
    return false;
};