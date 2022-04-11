/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumProduct = function(nums, k) {
    nums.sort((a, b) => a - b);
    console.log(nums)
    let currIndex = 0;
    
    for (let i = 0; i < k; i++) {
        if (nums[currIndex] > (nums[currIndex + 1] ?? Number.MAX_VALUE)) {
            currIndex++;
        } else {
            while (nums[currIndex] >= (nums[currIndex - 1] ?? Number.MAX_VALUE)) {
                currIndex--; 
            }
        }
        nums[currIndex]++;
    }
    
    console.log(nums)
    
    const output = nums.reduce((acc, curr) => (acc * curr) % (Math.pow(10, 9) + 7));
    
    return output;
    
};