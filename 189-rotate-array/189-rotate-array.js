/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// O(n)
// O(1)
var rotate = function(nums, k) {
    // shift(nums, k);
    work(nums, k);
    console.log(nums)
};

function work(nums, k) {
    const leftSide = nums.splice(0, getLaggedIndex(nums, 0, k));
    
    reverse(leftSide);
    reverse(nums);
    
    nums.unshift(...leftSide);
    reverse(nums);
}

function reverse(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const tmp = nums[left];
        nums[left] = nums[right];
        nums[right] = tmp;
        
        left++;
        right--;
    }
}

// function shift(nums, k) {
//     let cache = [];
    
//     for (let i = 0; i < k; i++) {
//         cache.push(nums[getLaggedIndex(nums, i, k)]);
//     }
//     console.log(cache)

//     for (let i = 0; i < nums.length; i++) {
//         cache.push(nums[i]);
//         const prevVal = cache.shift();
        
//         nums[i] = prevVal;
        
//     }
// }

function getLaggedIndex(nums, index, k) {
    const laggedIndex = (((index - k) % nums.length) + nums.length) % nums.length;
    
    return laggedIndex;
}