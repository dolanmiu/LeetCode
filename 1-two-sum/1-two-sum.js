/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const mem = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const diff = nums[i] - target;
        
        if (mem.has(-diff)) {
            return [i, mem.get(-diff)];
        }
        
        mem.set(nums[i], i);
    }
    
    return null;
};