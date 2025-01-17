/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
// Time: O(2^n)
// Space: O(M + 2^n) if creating new array
// Space O(M) if reusing array
let mem;
let maxInteger;
let picked;
var canIWin = function(maxChoosableInteger, desiredTotal) {
    maxInteger = maxChoosableInteger;
    if ((maxChoosableInteger + 1) * maxChoosableInteger / 2 < desiredTotal) {
        return false;
    }
    
    if (desiredTotal <= 0) {
        return true;
    }
    
    mem = new Map();
    picked = Array(maxChoosableInteger + 1).fill(false);
    
    const output = dfs(desiredTotal);
    
    return output;
};

function dfs(currTotal) {
    if (currTotal <= 0) {
        return false;
    }
    
    const key = format(picked);
    
    if (mem.has(key)) {
        return mem.get(key);
    }
    
    let output = false;
    
    for (let i = 1; i <= maxInteger; i++) {
        if (picked[i] === true) {
            continue;
        }
        
        picked[i] = true;
        
        // The recursion level going into this is the "other" player
        const res = dfs(currTotal - i);
                
        picked[i] = false;
        
        // This is why we negate, because if he loses, then we win
        output = output || !res;
        
        if (output) {
            // Short circuit to prevent TLE
            break;
        }
    }
    
    mem.set(key, output);
    
    return output;
}

function format(arr) {
    let num = 0;
    
    for (const b of arr) {
        num <<= 1;
        if (b) {
            num |= 1;
        }
    }
    return num;
}
