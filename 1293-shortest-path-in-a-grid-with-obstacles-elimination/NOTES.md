# Intuition
This one was the top frequency Google question
​
* Main take away point is to have a 3 dimentional visited Set
* Otherwise it is a pretty standard BFS style problem
* Node will contain 2 additioal attributes along side `i` and `j`: `powersUsed` and `level`.
​
## 3-Dimensional visited set
This is so it can keep track of the visited nodes per `power` used. It will keep track of the `i`, `j` and also the `currentK`
This is so that when there is other dimensions of visited nodes, it won't clash with each other.