/**
 * @param {string} s
 * @return {number}
 */
// Time: O(n)
// Space: O(n)
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let largest = 0;
    let left = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (map.has(char)) {
            while (map.has(char)) {
                map.delete(s[left]);
                left++;
            }
        }
        
        map.set(char, 1);
        
        largest = Math.max(largest, map.size);
    }
    
    return largest;
};