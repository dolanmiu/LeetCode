# Intuition
* Sort it first
* Create a count array of `numbers -> count`
* We short circuit with the zero clause
* We keep track of two maps, `output` and `used`
​
* We iterate through the sorted array from earlier
* We get the count from the `count map` of the number
* Then we check if all of it has been used up or not by checking the `used` and `output` maps
​
* If its used up, we skip
* If it's not used up, then we double it and check if it exists at all and if it has been used in the `used` map
* This check is simply checking if the used's value is less than the count's value
* If we are in luck and there is still capacity to be used, we add it to the used array, and also add the un-doubled value into the output
​
There is a final check to see if the output size is half the original array. If it isn't then it can't be a solution, return empty.
​
The solution is the output with a little bit of processing.
​
## Complexity
The most confusing part is checking if the number still has capacity to be added into used:
​
```
(used.get(double) ?? 0) < count.get(double)
```
​
### Why don't we check if `output` has capacity? Only `used`?
This is because the check is implicit, we are scanning the whole array from left to right
So even if we add, it won't exceed
​
​