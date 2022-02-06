/**
 * @param {number[][]} points
 * @return {number}
 */
// Time: O(n log n)
// Space: O(x)
var findMinArrowShots = function(points) {
    const sortedPoints = [...points].sort((a, b) => a[1] - b[1]);
    
    let shots = sortedPoints.length;
    
    for (let i = 0; i < sortedPoints.length; i++) {
        const [_, end] = sortedPoints[i];
        
        let hits = 0;
        for (let j = i + 1; j < sortedPoints.length; j++) {
            if (sortedPoints[j][0] <= end && sortedPoints[j][1] >= end) {
                hits++;
            } else {
                break;
            }
        }
        shots -= hits;
        i += hits;
    }
    
    return shots;
}
// var findMinArrowShots = function(points) {
//     let count = 0;
//     while (points.length > 0) {
//                     console.log(points)

//         pop(points);
//         count++;

//     }
    
//     return count;
// };

// function pop(points) {
//     const total = Math.max(...points.flat());
    
//     const arr = Array(total + 1).fill(undefined).map(() => new Set());

//     for (let i = 0; i < points.length; i++) {
//         const [min, max] = points[i];
        
//         for (let j = min; j <= max; j++) {
//             arr[j].add(i);
//         }
//     }
    
//         console.log(arr);

//     let count = 0;
//     arr.sort((a, b) => b.size - a.size);
//     const toPopSet = arr[0];
    
//     for (let item of toPopSet) {
//         points.splice(item, 1);
//     }
// }