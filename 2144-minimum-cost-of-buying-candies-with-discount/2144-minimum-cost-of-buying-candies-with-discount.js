/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a, b) => a - b);
    
    let output = 0;
    
    for (let i = cost.length - 1; i >= 0; i--) {
        const forwardIndex = cost.length - i - 1;
        
        if ((forwardIndex + 1) % 3 === 0) {
            continue;
        }
        
        output += cost[i];
    }
    
    return output;
};