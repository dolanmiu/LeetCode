/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const map = new Map();
    
    for (let i = 0; i < list1.length; i++) {
        const w = list1[i];
        map.set(w, {
                val: i,
                pairFound: false,
        });
    }
    
    for (let i = 0; i < list2.length; i++) {
        const w = list2[i];
        if (map.has(w)) {
            map.set(w, {
                val: Math.abs(map.get(w).val + i),
                pairFound: true,
            });
        }
    }
    
    const output = [];
    let lowestVal = Number.MAX_VALUE;
    
    for (const [key, value] of map) {
        if (lowestVal > value.val && value.pairFound === true) {
            lowestVal = value.val;
        }
    }
    console.log(lowestVal)
    
    for (const [key, value] of map) {
        if (lowestVal === value.val && value.pairFound === true) {
            output.push(key);
        }
    }
    
    return output;
};