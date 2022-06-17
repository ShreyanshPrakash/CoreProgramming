/*
977. Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/



/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    
    const entries = nums.entries();
    const len = nums.length;
    let result = [];
    let j = len - 1;
    let i = 0;
    for(let p = len - 1; p >= 0; p--){
        
        if(Math.abs(nums[i]) > Math.abs(nums[j])){
            result[p] = nums[i] * nums[i];
            i++;
        }else{
            result[p] = nums[j] * nums[j];
            j--;
        }
    }
    
    return result;
    
    
};