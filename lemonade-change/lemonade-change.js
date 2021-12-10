/**
 * @param {number[]} bills
 * @return {boolean}
 */
// Space: O(n)
// Time: O(n)
var lemonadeChange = function(bills) {
    const map = new Map();
    
    for (let i = 0; i < bills.length; i++) {
        const change = Math.abs(5 - bills[i]);
        
        map.set(bills[i], (map.get(bills[i]) ?? 0) + 1);
        
        if (change === 0) {
            continue;
        }
        
        if (change === 15) {
            if (map.has(10) && map.has(5)) {
                removeFromMap(map, 10);
                removeFromMap(map, 5);
            } else if (map.get(5) >= 3) {
                removeFromMap(map, 5);
                removeFromMap(map, 5);
                removeFromMap(map, 5);
            } else {
                console.log(map, i)
                return false;
            }
        }
        
        if (change === 5) {
            if (map.has(5)) {
                removeFromMap(map, 5);
            } else {
                return false;
            }
        }
        
        
    }
    
    return true;

};

function removeFromMap(map, val) {
    map.set(val, map.get(val) - 1);
    if (map.get(val) === 0) {
        map.delete(val);
    }
}