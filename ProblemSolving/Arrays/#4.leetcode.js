/*
53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
*/



var maxSubArray = function(nums) {
    
    if(!nums.length){
        return 0;
    }
    
    let sum = 0;
    let result = Number.MIN_SAFE_INTEGER;
    
    for(let num of nums){
        sum = sum + num;
        result = Math.max(result, sum);
        sum = sum < 0 ? 0 : sum;
    }
    
    return result;
};