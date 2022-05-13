# Intuition
* Create a dfs kind of solution
* Cache the cooked recipes, and add it to the supplies
* If it isn't in the `suppliesSet` then try and create it
* Keep track of the visited nodes, as there are cycles
​
Be careful, I messed up on the visited. Do not add the ingredient into the visited set, as this would instantly short circuit it when it goes into the `dfs` recurrsion.