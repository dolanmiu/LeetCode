# Fairly simple problem
Find the depth of the tree, and start whacking stuff into a `leaves` array
​
* Do a DFS, and at the base case, return `level: -1`, thats the bed rock of the tree
* Then as it bubbles up, increment the level and push it to an array.
* Filter the array at the end