# Intuition
* BFS
* But how do we stop infinite loops? Via DP!
* DP caches the current state, aka, position and speed
* Without a cache for DP, it will still work actually, provided that we limit the while loop and it would obviously TLE
* Keep track of levels as part of the nodes.
​
​
## Caching process
* If the next state has not been reached yet, then go for it, add a neighbour
* When adding such neighbour to the queue, add it to the visited DP
* Don't add visited when its popped off the queue. Adding to the visited when its popped off won't achieve much. It needds to be addded as soon as it's added to the queue, so that the neighbour won't be added again.
​
### Further Optimisation
Since `target > 0`, we don't need to consider neighbours if the future target is negative.