/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();

    for (let i = 0; i < s.length; i++) {
        map1.set(s.charAt(i), (map1.get(s.charAt(i)) ?? 0) + 1);
    }
    
    for (let i = 0; i < t.length; i++) {
        map2.set(t.charAt(i), (map2.get(t.charAt(i)) ?? 0) + 1);
    }
    
    console.log(map1, map2)
    
    for (const [key, value] of map2) {
        const map1Val = map1.get(key);
        
        if (map1Val !== value) {
            return key;
        }
    }
};