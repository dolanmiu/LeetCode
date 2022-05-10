# Intuition
* Annoying question
* Kind of like an Abacus
* Can only move the beads on one plane, but they can't cross over each other
* Its a magical abacus that only allows L beads to move left, and R beads to move right
​
The BFS way will TLE
​
Do a scan through the array simutaenously, skipping the `X`s. Then check if the next item on both pointers is the same, if so, then check if they are movable. If they are stuck, then return false. If so, then continue marching forward.
​
Increment p1 and p2. If they all check out, then return true.
​