* Need to check for nulls because otherwise currP.val would null pointer
* Nulls must be added onto the queue so that the tree is preserved, otherwise this would fail: `p = [1,2], q = [1,null,2]`