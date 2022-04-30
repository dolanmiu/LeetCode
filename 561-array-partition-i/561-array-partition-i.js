/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => nums
    .sort((a, b) => a - b)
    .map((n, i) => i % 2 === 0 ? [n, nums[i + 1]] : undefined)
    .filter((a) => !!a)
    .map((a) => Math.min(...a))
    .reduce((acc, curr) => acc + curr);