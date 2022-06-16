/*
1672. Richest Customer Wealth

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

*/





/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    
    
    let maxWealth = Number.MIN_SAFE_INTEGER;
    
    for(let banks of accounts){
        let bankWealth = 0;
        for(let money of banks){
            bankWealth = bankWealth + money;
        }
        maxWealth = Math.max(maxWealth, bankWealth);
    }
    
    return maxWealth;
};