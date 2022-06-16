
/*

14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/


/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    
    let prefix = "";
    let refStr = strs[0];
    let len = strs.length;
    let isValid = true;
    
    if(!refStr){
        return "";
    }
    
    while(prefix.length < refStr.length && isValid){
        
        let refIndex = prefix.length;
        let refChar = refStr[refIndex];
        
        
        for(let i = 1; i < len; i++){
            
            if(strs[i][refIndex] !== refChar){
                isValid = false;
                break;
            }
            
        }
        
        if(isValid){
            prefix = prefix + refChar;
        }
        
    }
    
    return prefix || "";
};