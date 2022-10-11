# Intuition
Scan through the array, and sum everything as we go along. While summing, we must mod the summed value
​
The `target` is the needed value to deduct for the answer to be correct. We can do this by simply finding the remainder, or aka, modding it.
​
the `neededValue` is simply the `currSum` minus the `target`. This value has to be modded again to allow for wrapping of values
​
the `prev` map shows snapshots of values at that point. So in a way `right` - `left` = `snapshot value`. With this in mind, this implicitly adds 1 to the `left` if we use the snapshot value. If the indexes are 2 and 1, then `2 - 1 = 1`, which is wrong right? It should be 2.
(Left and right are illustrative and are not variables in the code)
​
Now knowing this, it makes sense that `{ 0: -1 }`, because we need to `add 1` to extend the window. Initially it is set at `-1`, but it can change, `0` can be overriden if another smaller value has been found.