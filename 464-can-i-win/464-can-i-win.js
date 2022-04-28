/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
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
    
    for (let i = 1; i <= maxInteger; i++) {
        if (picked[i] === true) {
            continue;
        }
        
        picked[i] = true;
        
        const res = dfs(currTotal - i);
                
        picked[i] = false;
        
        if (!res) {
            mem.set(key, true)
            return true;
        }
        
        
    }
    
    mem.set(key, false);
    
    return mem.get(key);
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
