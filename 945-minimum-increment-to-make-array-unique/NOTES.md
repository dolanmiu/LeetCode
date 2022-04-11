# Interesting math concept
​
* When there are duplicates, subtract moves by `index * extra amount`
* E.g. if there is 2 5s, then subtract by `-5`. If theres three 5s, then its `-10`
* When there is a free slot, we increment by `x`
* I am guessing its the amount of times it would take to get from 0 to new value
​
It makes sense since its **increment only**
Subtracting it, and then adding it later on is simply finding the difference without needing to keep track of an index!