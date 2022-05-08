# Intuition
* Very tedious
* A lot of preparation
* Have an `eligiblityArray` (size of string) which marks which section can be modifed
* If it can be modified, set the `elibility boolean array` to true for the characters.
* E.g. `[true, false, true, true]` for the default example
* The `eligibility array` is only there to prevent clashes
* If it is eligible, set a `canMutate Array` to true or false to notify what `indices/sources` can be replaced.
​
​
* Once we have the `can mutate` array, we can't simply mutate the array as the indexes will get messed up
* Instead we do a bit of functional magic.
* Turn `s` into an array.
* Replace all the characters in `sources` in `s` to undefined, and set the first index of the string to an array of the `targets`
* Call `.flat()` to flatten the array :)