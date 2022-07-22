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
           area: Math.abs(x - a + 1) * Math.abs(y - b + 1),
        };
    }).filter((r) => r.area > 0);
    
    this.sumArea = this.data.reduce((acc, curr) => acc + curr.area, 0);
    console.log(this.data, this.sumArea)

};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    let rand = Math.random() * this.sumArea;

    const rect = weightedProcessing(this.data, rand);
    
    const [a, b, x, y] = rect;
    
    const newX = randomIntFromInterval(a, x);
    const newY = randomIntFromInterval(b, y);
    return [newX, newY];
    // return [rect[0]+Math.floor(Math.random()*(rect[2]-rect[0]+1)), rect[1]+Math.floor(Math.random()*(rect[3]-rect[1]+1))]
    
    // Time: O(2r)
    // Space: O(1)
//     const randomRect = weightedRandom2(this.data);
    
//     const rect = randomRect;
//     return [rect[0]+Math.floor(Math.random()*(rect[2]-rect[0]+1)), rect[1]+Math.floor(Math.random()*(rect[3]-rect[1]+1))];
    
    
//     const [a, b, x, y] = randomRect;
    
//     const newX = randomIntFromInterval(a, x);
//     const newY = randomIntFromInterval(b, y);
    

//     return [newX, newY];
};

function weightedRandom3(args) {
    let area = Math.random() * this.sumArea;
    let i = 0;
    while(area - args[i].area > 0) {
        area -= args[i].area;
        i++;
    }
    
    const rect = args[i].rect;
    
    return rect;
}

function weightedRandom2(args) {
    let area = Math.random() * this.sumArea;
    let i = 0;
    while(area - args[i].area > 0) {
        area -= args[i].area;
        i++;
    }
    
    const rect = args[i].rect;
    
    return rect;
}

function weightedProcessing(args, rand) {
    // Time: O(r)
    // Space: O(1)
    
    let sum = 0;
    
    for (const { rect, area } of args) {
        sum += area;
        if (sum > rand) {
            return rect;
        }
    }
}

function weightedRandom(args) {
    // Time: O(r)
    // Space: O(1)
    const rand = Math.random() * this.sumArea;
    
    let sum = 0;
    
    for (const { rect, area } of args) {
        sum += area;
        if (sum > rand) {
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