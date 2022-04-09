/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
// Time: O(n * m)
// Space: O(n)
var replaceWords = function(dictionary, sentence) {
    const words = sentence.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < dictionary.length; j++) {
            if (words[i].startsWith(dictionary[j])) {
                words[i] = dictionary[j];
            }
        }
    }
    
    return words.join(" ");
};