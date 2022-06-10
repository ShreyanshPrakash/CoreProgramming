/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    
    const strLength = s.length;
    let lpointer = 0;
    let rpointer = 0;
    let hash = {};
    let maxSubLength = 0;
    
    while(rpointer < strLength){
        const char = s[rpointer];
        
        if(hash[char] >= 0){
            // move the left pointer
            lpointer = Math.max(hash[char] + 1, lpointer);
            // delete the character;
            delete hash[char];
            
        }else{
            hash[char] = rpointer;
            maxSubLength = Math.max(maxSubLength, (rpointer - lpointer) + 1);
            rpointer++;
        }
        
        
    }
    
    
    return maxSubLength;
    
};