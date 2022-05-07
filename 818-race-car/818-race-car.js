/**
 * @param {number} target
 * @return {number}
 */
// Time: O(n) // n states
// Space: O(2n) // states can go up to double the target
let mem;
var racecar = function(target) {
    mem = new Set();
    const output = bfs(target);
    
    return output;
};

function bfs(target) {
    const queue = [{ pos: 0, speed: 1, length: 0 }];
    while (queue.length > 0) {
        const curr = queue.shift();
        
        if (curr.pos === target) {
            return curr.length;
        }
        
        const nextAcceleratePos = curr.pos + curr.speed;
        if (!mem.has(`${nextAcceleratePos}-${curr.speed * 2}`) && nextAcceleratePos > 0 && nextAcceleratePos < (target << 1)) {
            queue.push({ pos: nextAcceleratePos, speed: curr.speed * 2, length: curr.length + 1 }); // accelerate
            mem.add(`${nextAcceleratePos}-${curr.speed * 2}`);
        }
        
        if (!mem.has(`${curr.pos}-${curr.speed > 0 ? -1 : 1}`) && curr.pos > 0 && curr.pos < (target << 1)) {
            queue.push({ pos: curr.pos, speed: curr.speed > 0 ? -1 : 1, length: curr.length + 1 }); // reverse
            mem.add(`${curr.pos}-${curr.speed > 0 ? -1 : 1}`);
        }
    }
    
    return -1;
}
