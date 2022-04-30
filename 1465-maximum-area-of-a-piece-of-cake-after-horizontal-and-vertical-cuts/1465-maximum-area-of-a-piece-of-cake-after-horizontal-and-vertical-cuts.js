/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
// Create buckets instead, that might be better
// Time: O(wlogw + hlogh + ...)
// Space: O(hc + vc)
const modValue = Math.pow(10, 9) + 7;
// var maxArea = function(h, w, horizontalCuts, verticalCuts) {
//     horizontalCuts = horizontalCuts.sort((a, b) => a - b);
//     verticalCuts.sort((a, b) => a - b);
    
//     const verticalSlices = [...verticalCuts, w];
//     const horizontalSlices = [...horizontalCuts, h];

//     const verticalBuckets = [];  // 1,2,1
    
//     for (let i = 0; i < verticalSlices.length; i++) {
//         const prev = verticalSlices[i - 1] ?? 0;
        
//         const bucketSize = verticalSlices[i] - prev;
//         verticalBuckets.push(bucketSize);
//     }
    
//     const maxSquares = Array(verticalBuckets.length).fill(0);
    
//     for (let i = 0; i < horizontalSlices.length; i++) {
//         const prev = horizontalSlices[i - 1] ?? 0;
        
//         const length = horizontalSlices[i] - prev;
        
//         for (let j = 0; j < verticalBuckets.length; j++) {
//             const bucket = verticalBuckets[j];
//             maxSquares[j] = Math.max(maxSquares[j], safeMultiply(bucket, length, modValue));
//         }
//     }
    
//     console.log(modValue)
    
//     return Math.max(...maxSquares);
// }

var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    return safeMultiply(getMaxDist(h, horizontalCuts), getMaxDist(w, verticalCuts), Math.pow(10, 9) + 7);
}

function getMaxDist(end, cuts) {
    cuts.sort((a, b) => a - b);
    let res = 0;
    let from = 0;
    
    for (const c of cuts) {
        res = Math.max(res, c - from);
        from = c;
    }
    
    return Math.max(res, end - from);
}


const safeMultiply = (a, b, c) => {
	let x = a * b;
	if (!Number.isSafeInteger(x)) {
		return Number((BigInt(a) * BigInt(b)) % BigInt(c));
	}
	return x % c;
}

// 	public int maxArea(int h, int w, int[] hc, int[] vc) {
//         return (int) ((getMaxDist(h, hc) * getMaxDist(w, vc)) % (Math.pow(10, 9) + 7));
//     }
    
//     private long getMaxDist(int end, int[] cuts) {
//         Arrays.sort(cuts);
//         long res = 0, from = 0;
//         for (int c : cuts) {
//             res = Math.max(res, c - from);
//             from = c;
//         }
//         return Math.max(res, end - from);
//     }




// let upDownCuts;
// let leftRightCuts;
// let mem;
// var maxArea = function(h, w, horizontalCuts, verticalCuts) {
//     upDownCuts = new Set(horizontalCuts);
//     leftRightCuts = new Set(verticalCuts);
//     mem = new Map();
    
//     return iterate(h, w);
// };

// function iterate(height, width) {
//     for (let i = 0; i < height; i++) {
//         for (let j = 0; j < width; j++) {
            
//             const currHeight = upDownCuts.has(i) ? 0 : mem.get(`${(i - 1) % 2}-${j % 2}`)?.y ?? 0;
//             const currWidth = leftRightCuts.has(j) ? 0 : mem.get(`${i % 2}-${(j - 1) % 2}`)?.x ?? 0;
            
//             mem.set(`${i % 2}-${j % 2}`, { x: currWidth + 1, y: currHeight + 1 });
//         }
//     }
//     // console.log(mem)
//     let max = 0;

//     for (const [key, value] of mem) {
//         max = Math.max(max, value.x * value.y % (Math.pow(10, 9) + 7));
//     }
//     return max;
// }