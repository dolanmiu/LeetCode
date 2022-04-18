# This is a bottom up DFS approach
* Find the total amount of side jumps
* First create a state map initialised to max values. This is the start of the DP. This state map has all the rows. We set the initial row to `1,0,1` because the frog starts in the middle one, and obviously it costs `1` to move to the other columns.
* Iterate through every cell in the problem
​
## For each cell
* If there is an obstacle in the current cell, then we skip
* If there is an obstacle in the next foward cell, then we also skip
* Otherwise, we set the current cell state to the previous **SIDE** row values `+ 1`. This is because if it's a side, then it would require `+ 1` jump to the total. If it's on the same row, we don't increment 1 because there isn't a side jump. The question asks for the amount of side jumps required.
* Since the frog can jump between **ANY** adjacent column, we check all values from the previous row
​
## Finally
* Finally, we get the minimum value on the final row :)
​
​
* There is a helper function to check if there are obstacles in the way `obstacleInWay()`