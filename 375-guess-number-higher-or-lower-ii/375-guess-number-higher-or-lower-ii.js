/**
 * @param {number} n
 * @return {number}
 */
let mem;
var getMoneyAmount = function(n) {
    mem = new Map();
    
    return dfs(1, n);
};

function dfs(left, right) {
    if (left >= right) {
        return 0;
    }
    
    if (mem.has(`${left}-${right}`)) {
        return mem.get(`${left}-${right}`);
    }
    
    let res = Number.MAX_VALUE;
    for (let i = left; i <= right; i++) {
        const leftPath = dfs(left, i - 1);
        const rightPath = dfs(i + 1, right);
        res = Math.min(res, i + Math.max(leftPath, rightPath))
    }
    
    mem.set(`${left}-${right}`, res);
    
    return res;
}
