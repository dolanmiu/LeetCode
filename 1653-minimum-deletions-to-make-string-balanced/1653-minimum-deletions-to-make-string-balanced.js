/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let aLeft = 0
    let bLeft = 0;
    let aRight = [...s].reduce((acc, curr) => curr === 'a' ? acc + 1 : acc, 0);
    let bRight = [...s].reduce((acc, curr) => curr === 'b' ? acc + 1 : acc, 0);
    
    let output = bLeft + aRight;
    
    for (let i = 0; i <= s.length; i++) {
        if (s[i] === 'a') {
            aLeft++;
            aRight--;
        }
        
        if (s[i] === 'b') {
            bLeft++;
            bRight--;
        }
        output = Math.min(output, bLeft + aRight);
    }
    
    return output;
}
// var minimumDeletions = function(s) {
//     const aArray = Array(s.length).fill(0);
//     const bArray = Array(s.length).fill(0);
    
//     // let offSet = 0;
//     // for (let i = s.length - 1; i > 0; i--) {
//     //     const char = s.charAt(i);
//     //     if (char === 'b') {
//     //         break;
//     //     }
//     //     offSet++;
//     // }
//     let counter = 0;
//     for (let i = 0; i < s.length; i++) {
//         const char = s.charAt(i);
//         aArray[i] = counter;
//         if (char === 'b') {
//             counter++;
//         }
//     }
    
//     counter = 0;
//     for (let i = s.length - 1; i >= 0; i--) {
//         const char = s.charAt(i);
//         bArray[i] = counter;
//         if (char === 'a') {
//             counter++;
//         }
//     }
//     console.log(aArray, bArray)
    
//     let minDelete = s.length;
//     for (let i = 0; i < s.length; i++) {
//         minDelete = Math.min(minDelete, aArray[i] + bArray[i]);
//     }
    
//     return minDelete;
    
    
//     let currAIndex = s.length - 1;
//     let currBIndex = s.length - 1;
//     // const minIfA = s.charAt(s.length - 1) === 'a' ? Math.min(aArray[currIndex], bArray[currIndex]) : Number.MAX_VALUE;

//     for (let i = s.length - 1; i > 0; i--) {
//         const char = s.charAt(i);
//         currAIndex = i;
//         if (char === 'a') {
//             break;
//         }
//     }
    
//     for (let i = s.length - 1; i > 0; i--) {
//         const char = s.charAt(i);
//         currBIndex = i;
//         if (char === 'a') {
//             break;
//         }
//     }
//     console.log(aArray, bArray)
//     return Math.min(aArray[currAIndex], bArray[currAIndex], aArray[currBIndex], bArray[currBIndex]);
    
// };