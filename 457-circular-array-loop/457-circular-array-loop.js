/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const sign = nums[i] >= 0 ? 'positive' : 'negative';
        const mem = new Set([i]);
        const seq = [i];
        let mainIndex = i;
        
        for (let j = 0; j < nums.length; j++) {
            const newIndex = jump(nums, mainIndex);
            mainIndex = newIndex;
            
            if (sign === 'positive' && nums[newIndex] < 0) {
                break;
            }
            
            if (sign === 'negative' && nums[newIndex] >= 0) {
                break;
            }
            
            if (mem.has(newIndex)) {
                if (seq.length <= 1) {
                    break;
                }
                
                return true;
            }
            seq.push(mainIndex);
        }
        
    }
    return false;

};

function jump(nums, index) {
    const steps = nums[index];
    const offset = index + steps;
    
    const newIndex = ((offset % nums.length) + nums.length) % nums.length;
    return newIndex;
}