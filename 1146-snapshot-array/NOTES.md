# Intuition
* Very simple question, but require a lot of optimisation hacks
* Do not loop over every element in map
* Create two arrays, toBeFlushed, and the main holding array
* Holding array, holds maps of snapshot -> value
​
## Get method
In the get method, it's quite genius
* Start at index snap_id, then iterate downward to find the most recent snapshot value
* Further optimise, we can start it at index max of the current map.