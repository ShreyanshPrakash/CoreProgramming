/*

1. Two Sum (EASY)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

// Solution 1
var twoSum = function(nums, target) {
    const length = nums.length;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
};


// Solution 2
var twoSum = function(nums, target) {
    const length = nums.length;
    let hash = {};
    for(let i = 0; i < length; i++){
        hash[nums[i]] = i;
    }
    
    for(let j = 0; j < length; j++){
        let nextNum = target - nums[j];
        if(hash[nextNum] >= 0 && hash[nextNum] !== j){
            return [hash[nextNum], j];
        }
    }
    
    
};


// Solution 3
/*
    u can also store the diff itself as the key.
*/
var twoSum = function(nums, target) {
    let hash = {};
    for(let [index, num] of nums.entries()){
        if(hash[num] >= 0){
            return [hash[num], index]
        }
        hash[target - num] = index;
        
    }
};


// Solution 4 (most Optimized)
//  Here my keys is the num of [1,2,4,5,6]
// eg : > {1:0,2:1,4:2}
var twoSum = function(nums, target) {
    const length = nums.length;
    let hash = {};
    for(let i = 0; i < length; i++){
        const numToSearch = target - nums[i];
        if(hash[numToSearch] >= 0){
            return [hash[numToSearch], i];
        }
        
        hash[nums[i]] = i;
    }
    
};


// Solution 3 and 4 both are good