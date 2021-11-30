/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// Time: O(n)
// Space O(1)
var canPlaceFlowers = function(flowerbed, n) {
    let curr = n;
    
    for (let i = 0; i < flowerbed.length; i++) {
        const prev = flowerbed[i - 1] ?? 0;
        const next = flowerbed[i + 1] ?? 0;
        
        if (prev === 0 && next === 0 && flowerbed[i] === 0) {
            console.log(i)
            flowerbed[i] = 1;
            curr--;
        }
    }
    
    return curr <= 0;
};