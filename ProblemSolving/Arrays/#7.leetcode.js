/*

350. Intersection of Two Arrays II

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * O(M + N)
 */
var intersect = function (nums1, nums2) {
  let storage = {};
  let result = [];

  for (let item of nums1) {
    if (storage[item]) {
      storage[item]++;
    } else {
      storage[item] = 1;
    }
  }

  for (let item of nums2) {
    if (storage[item] > 0) {
      result.push(item);
      storage[item]--;
    }
  }

  return result;
};
