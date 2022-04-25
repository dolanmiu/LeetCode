/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
    const maxMem = Array(nums.length).fill(0);
    const minMem = Array(nums.length).fill(Number.MAX_VALUE);
    
    for (let i = 0; i < nums.length; i++) {
        maxMem[i] = Math.max(maxMem[i - 1] ?? 0, nums[i]);
    }
    
    for (let i = nums.length - 1; i >= 0; i--) {
        minMem[i] = Math.min(minMem[i + 1] ?? Number.MAX_VALUE, nums[i]);
    }
    
    let output = 0;
    
    for (let i = 1; i < nums.length - 1; i++) {
        if (maxMem[i - 1] < nums[i] && nums[i] < minMem[i + 1]) {
            output += 2;
        } else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) {
            output += 1;
        }
    }
    
    return output;
};