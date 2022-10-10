/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
// Time: (n * b) = (10000 * 20000)
var corpFlightBookings = function(bookings, n) {
//     let runningTotal = 0;
//     let currentBookingIndex = 0;
    
//     // O(n)
//     const output = Array(n + 1).fill(0);
    
//     // O(b)
//     const map = new Map();
    
//     // Time: O(n)
//     // Space: O(1)
//     for (let i = 1; i <= n; i++) {
//         while (bookings[currentBookingIndex] && bookings[currentBookingIndex][0] <= i) {
//             const curr = bookings[currentBookingIndex]; // 20, 25
//             runningTotal += curr[2];
//             map.set(curr[1], (map.get(curr[1]) ?? 0) + curr[2]); // { 3: 20, 5: 25 }
            
//             currentBookingIndex++;
//         }
        
//         output[i] = runningTotal; // [0, 10, 55, 45, 25, 25]
        
//         if (map.has(i)) {
//             runningTotal -= map.get(i); // 25
//             map.delete(i);
//         }
//     }
    
//     // Time: O(n)
//     output.shift();
    
//     return output;
    
    const delta = Array(n + 2).fill(0);
    
    for (const [first, last, seats] of bookings) {
        delta[first] += seats;
        delta[last + 1] -= seats;
    }
    
    const output = Array(n + 1).fill(0);
        
    for (let i = 0; i < output.length; i++) {
        output[i] += (output[i - 1] ?? 0) + delta[i];
    }
    
    output.shift();
    
    return output;
};