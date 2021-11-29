/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Edge cases
// Empty array []
// [1]
// [1,2]
// [1,2,3]

var threeSum = function(nums) {
    const solutions = [];
    const sortedNums = [...nums].sort((a, b) => a - b);
    
    let lastNum;
    for (let i = 0; i < sortedNums.length; i++) {
        if (lastNum === sortedNums[i]) {
            continue; // To prevent duplicates
        }
        
        const pinnedI = -sortedNums[i];
        
        let j = i + 1;
        let k = sortedNums.length - 1;
        
        while (j < k) {
            const sum2 = sortedNums[j] + sortedNums[k];
            if (sum2 > pinnedI) {
                k--;
            } else if (sum2 < pinnedI) {
                j++;
            } else {
                solutions.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                while(sortedNums[k] === sortedNums[k - 1]) {
                    k--;
                }
                while(sortedNums[j] === sortedNums[j + 1]) {
                    j++;
                }
                k--;
                j++;
            }
        }
        
        lastNum = sortedNums[i];
    }
    
    return solutions;
};