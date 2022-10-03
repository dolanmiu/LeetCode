/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const map = new Map();
    
    // Time: O(n)
    // Space: O(n)
    for (const n of nums) {
        map.set(n, (map.get(n) ?? 0) + 1);
    }
    
    let sum = 0;
    
    // Time: O(n)
    // Space: O(1)
    for (const [key, value] of map) {
        const triangleSize = value - 1; // Min: 0
        
        const total = (triangleSize * (triangleSize + 1)) / 2;
        sum += total;
    }
    
    return sum;
};