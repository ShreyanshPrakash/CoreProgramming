/*

5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/


const isPalindrome = (str) => {

    const len = str.length;
    let left = 0;
    let right = len - 1;
    let result = "";

    while(left <= right && str[left] === str[right] ){
            left++;
            right--;
    }

    if(left > right){
        return true;
    }

    return false;

  

}

const subStringPalindrome = (str) => {

    const len = str.length;
    let left = 0;
    let right = len -  1;

    while(left <= len && right >=0){

        if(str[left] === str[right]){
            const subString = str.substring(left, right + 1);
            const result = isPalindrome(subString);
            if(result){
                return subString;
            }
        }else{
            right--;
        }
    }
}

const sample = "babad";
let result = subStringPalindrome(sample);
console.log(result);


