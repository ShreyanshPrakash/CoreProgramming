/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    
    if(x < 0 || (x % 10 === 0 && x !== 0) ){
        return false;
    }
    
    let xRemain = x;
    let revX = 0;
    
    while(xRemain > revX){
        
        revX = revX * 10 + xRemain % 10;
        xRemain = Math.floor(xRemain / 10);
        
    }
    
     console.log({
            revX,
            xRemain,
        })
   
    return xRemain === revX || xRemain === Math.floor(revX / 10);
    
};


// I am iterating till the half of the number and the njust compared in the end