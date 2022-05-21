/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(wordlist, master) {
    let matches = 0;
    
    for (let i = 0; i < 10; i++) {
        const guess = wordlist[Math.floor(Math.random() * (wordlist.length - 1))];
        matches = master.guess(guess);
        if (matches === 6) {
            return;
        }
        
        const candidates = [];
        
        for (const word of wordlist) {
            if (matches === getDiff(guess, word)) {
                candidates.push(word);
            }
        }
        
        wordlist = candidates
    }
};

function getDiff(word1, word2) {
    let matches = 0;
    
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] === word2[i]) {
            matches++;
        }
    }
    
    return matches;
}