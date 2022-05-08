/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
let eligibleMem;
var findReplaceString = function(s, indices, sources, targets) {
    eligibleMem = Array(s.length).fill(false);
    
    const canMutate = Array(indices.length).fill(false);
    
    for (let i = 0; i < indices.length; i++) {
        canMutate[i] = assignEligibility(s, indices, sources, i);
    }
    
    const sArr = s.split('');
    
    for (let i = 0; i < canMutate.length; i++) {
        if (canMutate[i]) {
            for (let j = indices[i]; j < indices[i] + sources[i].length; j++) {
                sArr[j] = undefined;
            }
            sArr[indices[i]] = targets[i].split('');
        }
    }
    
    const output = sArr
        .filter((a) => !!a)
        .flat()
        .join('');
    
    console.log(eligibleMem, canMutate, sArr, output);
    return output;
};

function assignEligibility(s, indices, sources, i) {
    const origSubStr = s.substring(indices[i], indices[i] + sources[i].length);
    
    if (origSubStr === sources[i]) {
        for (let j = indices[i]; j < indices[i] + origSubStr.length; j++) {
            if (eligibleMem[j] === true) {
                return false
            }
        }
        
        for (let j = indices[i]; j < indices[i] + origSubStr.length; j++) {
            eligibleMem[j] = true;
        }
        return true;
    }
    
    return false;
}