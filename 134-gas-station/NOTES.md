# Intuition
Not that intuitive
Greedy solution
​
There is only one solution, so we can do a simple check if `total gas === total cost`
​
If it's not, then we can return `-1`
​
We create a diff array based on the two arrays
​
We then greedily sum up the diffs together
​
* If the total is less than 0, then we clearly messed up somewhere in the line. Reset total to 0, and set the potential start point to the next one along.
* We keep going until entire diff array is exhausted
* Return the start point
​
​