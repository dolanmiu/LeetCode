/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
            
//             const numA = nums[i];
//             const numB = nums[j];
            
//             let diff = numA ^ numB;
            
//             let count = 0;
 
//             while (diff)
//             {
//                 count += (diff & 1);    // check last bit
//                 diff >>= 1;
//             }
            
//             sum += count;
//         }
//     }
    
//     return sum;
    const n = 31;
    const countOfOnes = Array(n).fill(0);
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < n; j++) {
            countOfOnes[j] += (nums[i] >> j) & 1;
        }
    }
    console.log(countOfOnes)
    let sum = 0;
    for (let count of countOfOnes) {
        sum += count * (nums.length - count); 
    }
    
    return sum;
};