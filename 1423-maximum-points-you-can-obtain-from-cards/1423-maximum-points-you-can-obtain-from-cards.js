/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    
    let maxSum = cardPoints.reduce((acc, curr, i) => {
        if (i >= k) {
            return acc;
        } else {
            return acc + curr;
        }
    });
    let curr = maxSum;
    
    let left = k - 1;
    
    for (let right = cardPoints.length - 1; right > cardPoints.length - 1 - k; right--) {
        const currSum = curr - cardPoints[left] + cardPoints[right];
        maxSum = Math.max(maxSum, currSum);
        
        curr = currSum;
        
        left--;
    }
    
    console.log(maxSum);
    return maxSum;
}
// let mem;
// var maxScore = function(cardPoints, k) {
//     mem = new Map();
    
//     const output = dfs(cardPoints, 0, cardPoints.length - 1, 0, k);
    
//     return output;
// };

// function dfs(cardPoints, left, right, currentK, k) {
//     if (mem.has(`${left}-${right}`)) {
//         return mem.get(`${left}-${right}`);
//     }
    
//     if (currentK === k) {
//         return 0;
//     }
    
//     const leftRes = dfs(cardPoints, left + 1, right, currentK + 1, k) + cardPoints[left];
//     const rightRes = dfs(cardPoints, left, right - 1, currentK + 1, k) + cardPoints[right];
    
//     const max = Math.max(leftRes, rightRes);
//     mem.set(`${left}-${right}`, max);
    
//     return max;
// }