/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
let priceArr;
let specialMat;
let mem;
let blankStateKey;
var shoppingOffers = function(price, special, needs) {
    priceArr = price;
    specialMat = special;
    mem = new Map();
    blankStateKey = hashCode(Array(needs.length).fill(0).join('-'));
    
    const output = dfs(needs, []);
    
    return output;
};

function dfs(needs, path) {
    const key = hashCode(needs.join('-'));
    
    if (mem.has(key)) {
        return mem.get(key);
    }
    
    if (blankStateKey === key) {
        return 0;
    }
    
    let allPathResults = [];
    
    for (let i = 0; i < priceArr.length; i++) {
        const need = needs[i];
        const price = priceArr[i];

        if (needs[i] > 0) {
            const newArr = [...needs];
            newArr[i] = newArr[i] - 1;
            
            const total = dfs(newArr, [...path, price]);
            allPathResults.push(total + price);
        }
    }
    
     for (let i = 0; i < specialMat.length; i++) {
        const need = needs[i];
        const special = specialMat[i];
         
        const newArr = applySpecialOffer(needs, special);
         
        if (checkIfBust(newArr)) {
            continue;
        }
         
        const price = special[special.length - 1];
        const total = dfs(newArr, [...path, price]);
        allPathResults.push(total + price);
    }
    
    const min = Math.min(...allPathResults);
    mem.set(key, min);
    return min;
}

function applySpecialOffer(arr, special) {
    const newArr = [...arr];
    
    for (let j = 0; j < special.length - 1; j++) {
        newArr[j] -= special[j];
    }
    
    return newArr;
}

function checkIfBust(arr1) {
    const fArr1 = arr1.filter((a) => a < 0);
    
    return fArr1.length > 0;
}

function hashCode(s) {
    for(var i = 0, h = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}