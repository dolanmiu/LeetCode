/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let cache = words[0];
    
    let output = [];
    
    for (let i = 1; i < words.length; i++) {
        if (cache.length + (cache.length > 0 ? 1 : 0) + words[i].length > maxWidth) {
            
            const currLine = cache.split(' ');
            const totalCharacters = currLine.reduce((acc, curr) => acc + curr.length, 0);
            const spaceLeft = maxWidth - totalCharacters;
            
            if (currLine.length - 1 === 0) {
                output.push(padText(maxWidth, cache))
            } else {
                const remainder = spaceLeft % (currLine.length - 1);
                const spaceUnit = Math.floor(spaceLeft / (currLine.length - 1));
                const space = Array(spaceUnit).fill(' ').join('');
                const justified = currLine.reduce((acc, curr, i) => `${acc}${curr}${space}${i < remainder ? ' ' : ''}`, '').trim();
                output.push(justified);
            }

            cache = words[i];
        } else {
            cache = `${cache} ${words[i]}`;
        }
    }
    
    output.push(padText(maxWidth, cache));
    
    return output;
};

function padText(maxWidth, cache) {
    const lastDiff = maxWidth - cache.length;
    const space = Array(lastDiff).fill(' ').join('');
    const justified = `${cache}${space}`;
    
    return justified;
}