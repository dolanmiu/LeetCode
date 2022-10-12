/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
// Time: O(6n + 2nlogn)
// Space: O(4n)
var maxSumRangeQuery = function(nums, requests) {
    // Time: O(2n)
    // Space: O(2n)
    const arr = Array(nums.length).fill(0);
    const delta = Array(nums.length).fill(0);
    
    // Time: O(r)
    // Space: O(1)
    for (const [start, end] of requests) {
        arr[start]++;
        if (end + 1 < nums.length) {
            arr[end + 1]--;
        }
    }
    
    // Time: O(n)
    // Space: O(1)
    for (let i = 0; i < delta.length; i++) {
        delta[i] = (delta[i - 1] ?? 0) + arr[i];
    }
    
    // Time: O(n)
    // Space: O(n)
    const deltaWithIndex = delta.map((d, i) => ({ delta: d, index: i}));
    
    // Time: O(n log n)
    // Space: O(1)
    deltaWithIndex.sort((a, b) => b.delta - a.delta);
    
    // Time: O(n log n)
    // Space: O(1)
    nums.sort((a, b) => b - a);
    
    let output = 0;
    
    // Time: O(n)
    // Space: O(n)
    const newArr = Array(nums.length).fill(0);
    
    // Time: O(n)
    // Space: O(1)
    for (let i = 0; i < deltaWithIndex.length; i++) {
        const { index } = deltaWithIndex[i];
        
        newArr[index] = nums[i];
    }
    
    // Time: O(n)
    // Space: O(1)
    for (let i = 0; i < deltaWithIndex.length; i++) {
        const { delta, index } = deltaWithIndex[i];
        output += newArr[index] * delta;
        output %= (Math.pow(10, 9) + 7);
    }
        
    return output;
};