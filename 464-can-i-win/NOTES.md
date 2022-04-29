# Things to note
* Don't nessesarily need the `format` function. That was to get rid of the TLE from LeetCode
* The format function generates a `key` for the `mem`.
* With mutating the array, there is less memory used. But when coming back out of the DFS, we need to reset the value, which is a pain
​
## Intuition
​
* Essentially we go through every single combination, keeping track of whats picked
* We start at the target, and move downwards until `0`.
* When it hits zero then that is the base case, which is `false`
* **Every path will obviously hit the base case before it bubbles up**
* At every *level* of the recursion, it alternates between player 1's context, and player 2's context
* Because of this alternating, we simply negate the result from the level below. If one player wins, the other player loses.
* The `canIWin` function is calling it from player 1's point of view. **This is why we don't do any player tracking**.
​
​
​
## Why don't we keep track of the player?
The truth is, we DO keep track of the player, its just implicit. The call stack keeps track of the player
​
The first level of the call stack is the output of player 1, second level is player 2, third level back to player 1 etc etc.
​
With that in mind, the line if (!helper(desiredTotal-i)) { makes more sense.
It is essentially negating the result of the game, so if player 2 loses, then obviously player 1 wins