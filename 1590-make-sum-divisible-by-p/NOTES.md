# Intuition
Scan through the array, and sum everything as we go along. While summing, we must mod the summed value
​
The `target` is the needed value to deduct for the answer to be correct. We can do this by simply finding the remainder, or aka, modding it.
​
the `neededValue` is simply the `currSum` minus the `target`. This value has to be modded again to allow for wrapping of values