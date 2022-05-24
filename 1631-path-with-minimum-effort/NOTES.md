# Intuition
Modified BFS question
* We keep a back log of potential next neighbours in a Min Priority Queue (my first time using one)
* This priority queue will store the neighbours in effort order ascending.
* Two while loops. One outer one to `dequeue` from `minQueue` and push to the `queue`. And another while loop to exhaust the queue `while (queue.length > 0)` and find `neighbours` and add it to the `priority queue`.
​
## Gotchas
Make sure to add visited only when its added to the `queue`. Adding it to anywhere else will not work.
* I have tried adding it in getNeighbours (which turns it into a greedy algorithm as it immediately adds visited whenever it finds a neighbour.
* In `getNeighbours()`, it is tricky to get the effort. It is not simply the difference, but the maximum of the difference, or what's currently at the current node.
​