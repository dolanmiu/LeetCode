/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
// Time: O(n * m)
var findLongestWord = function(s, dictionary) {
    let maxCount = 0;
    let maxWord = "";
    
    for (let i = 0; i < dictionary.length; i++) {
        const curr = dictionary[i];
        let currCount = 0;
        
        let k = 0;
        for (let j = 0; j < curr.length; j++) {
            const currChar = curr.charAt(j);
            
            for (; k < s.length; k++) {
                const currOrigChar = s.charAt(k);
                
                if (currChar === currOrigChar) {
                    currCount++;
                    k++;
                    break;
                    
                }
            }
        }
        
        console.log(currCount, curr.length)
        
        if (currCount === curr.length) {
            if (currCount > maxCount) {
                maxCount = currCount;
                maxWord = curr;
            } else if (currCount === maxCount) {
                if (curr < maxWord) {
                    maxWord = curr;
                }
            }
        }
    }
    
    return maxWord;
};