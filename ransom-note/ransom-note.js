/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magMap = new Map();
    
    for (let i = 0; i < magazine.length; i++) {
        magMap.set(magazine.charAt(i), (magMap.get(magazine.charAt(i)) ?? 0) + 1);
    }
    
    const ransomNoteMap = new Map();
    
    for (let i = 0; i < ransomNote.length; i++) {
        ransomNoteMap.set(ransomNote.charAt(i), (ransomNoteMap.get(ransomNote.charAt(i)) ?? 0) + 1);
    }
    
    for (const [key, value] of ransomNoteMap) {
        console.log(key, ransomNoteMap, magMap, magMap.get(key), value, magMap.get(key) <= value)
        if (magMap.get(key) === undefined) {
            return false;
        }
        
        if (magMap.get(key) < value) {
            return false;
        }
    }
    
    return true;
};