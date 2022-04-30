/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
// Time: O(2^n)
// Space: O(n)
let target;
var makesquare = function(matchsticks) {
    const sum = matchsticks.reduce((acc, curr) => acc + curr);
    
    if (sum % 4 !== 0) {
        return false
    }
    
    target = sum / 4;
    
    const output = dfs(matchsticks, [0, 0, 0, 0], 0);
    
    return output;
    
};

function dfs(matchsticks, buckets, index) {   
    const [left, right, up, down] = buckets;
    
    if (left === target && right === target && up === target && down === target) {
        return true;
    }
    
    if (left > target || right > target || up > target || down > target) {
        return false;
    }
    
    if (index > matchsticks.length) {
        return false;
    }
    
    let output = false;
    
    outer:
    for (let i = 0; i < 4; i++) {
        // Need to do this optimisation to not make it TLE
        inner:
        for (let j = 0; j < 4; j++) {
            if (j === i) {
                break inner;
            }
            
            if (buckets[i] === buckets[j]) {
                continue outer;
            }
        }
        
        const newBuckets = [...buckets];
        newBuckets[i] += matchsticks[index];
        
        output |= dfs(matchsticks, newBuckets, index + 1);
    }
    
    return output;
}