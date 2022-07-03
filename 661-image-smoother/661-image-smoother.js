/**
 * @param {number[][]} img
 * @return {number[][]}
 */
// Time: O(n*m*9)
// Space: O(n*m)
var imageSmoother = function(img) {
    const newImg = Array(img.length)
        .fill(undefined)
        .map(() => Array(img[0].length));
    
    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[0].length; j++) {
            const neighbours = getNeighboursAndSelf(img, i, j);
            const flooredValue = averageFloor(neighbours);
            
            newImg[i][j] = flooredValue;
        }
    }
    
    return newImg;
};

function getNeighboursAndSelf(img, i, j) {
    const left = [i - 1, j];
    const right = [i + 1, j];
    const top = [i, j - 1];
    const bot = [i, j + 1];
    
    const topLeft = [i - 1, j - 1];
    const bottomLeft = [i - 1, j + 1];
    const topRight = [i + 1, j - 1];
    const bottomRight = [i + 1, j + 1];
    
    const self = [i, j];
    
    return [left, right, top, bot, topLeft, bottomLeft, topRight, bottomRight, self]
        .filter(([nextI, nextJ]) => {
            if (nextI >= 0 && nextI < img.length && nextJ >= 0 && nextJ < img[0].length) {
                return true;
            }
        
            return false;
        })
        .map(([nextI, nextJ]) => {
            return img[nextI][nextJ];
        });
}

function averageFloor(points) {
    const sum = points.reduce((acc, curr) => acc + curr);
    
    const average = sum / points.length;
    
    return Math.floor(average);
}