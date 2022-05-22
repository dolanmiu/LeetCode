# Intuition
* Golden source of truth pricing map. timestamp -> price
* Use a min heap and max heap (they exist in LeetCode) to keep track of the highest values and lowest values
* When finding the maximum price, usually you would straight up pop from the max heap, but it could've been updated right? So we do a check, if there is a disparity between the heap value and the golden truth value, then we discard and try again!
* Vice versa for finding the minimum