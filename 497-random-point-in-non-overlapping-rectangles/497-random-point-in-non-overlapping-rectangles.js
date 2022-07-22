/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    // Time: O(r)
    // Space: O(r)
    this.data = rects.map((r) => {
        const [a, b, x, y] = r;
        return {
           rect: r,
           area: (x - a + 1) * (y - b + 1),
        };
    });
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    // Time: O(2r)
    // Space: O(1)
    const randomRect = weightedRandom(this.data);
    
    const [a, b, x, y] = randomRect;
    
    const newX = randomIntFromInterval(a, x);
    const newY = randomIntFromInterval(b, y);
    
    return [newX, newY];
};

function weightedRandom(args, randomVal) {
    // Time: O(2r)
    // Space: O(1)
    const totalArea = args.reduce((acc, curr) => acc + curr.area, 0);
    const rand = Math.random() * totalArea;
    
    let sum = 0;
    
    for (const { rect, area } of args) {
        sum += area;
        if (sum >= rand) {
            return rect;
        }
    }
}

function randomIntFromInterval(min, max) {
    // Time: O(1)
    // Space: O(1)
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */