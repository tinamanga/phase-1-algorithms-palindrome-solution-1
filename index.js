function isPalindrome(word) {
  // Write your algorithm here
    // Initialize two pointers, one at the beginning and one at the end
    let left = 0;
    let right = word.length - 1;
    
    // Loop while the left pointer is less than the right pointer
    while (left < right) {
      // If characters at the left and right pointers are different, return false
      if (word[left] !== word[right]) {
        return false;
      }
      
      // Move the pointers towards the center
      left++;
      right--;
    }
    
    // If no mismatch was found, the word is a palindrome
    return true;
}

/* 
  Add your pseudocode here
  Function isPalindrome(word):
    Initialize left pointer to 0
    Initialize right pointer to length of word - 1
    
    While left pointer is less than right pointer:
        If word[left] is not equal to word[right]:
            Return false  // Characters don't match, not a palindrome
        
        Increment left pointer by 1
        Decrement right pointer by 1

    Return true  // All characters match, the string is a palindrome

 
// 
// /*
//   Add written explanation of your solution here
 1. Define a function `isPalindrome(word)`.
//   2. Initialize two pointers, one at the start (`left`) and one at the end (`right`) of the string.
//   3. Loop while the `left` pointer is less than the `right` pointer:
//      a. If the characters at `left` and `right` are not equal, return `false`.
//      b. Otherwise, increment the `left` pointer and decrement the `right` pointer.
//   4. If the loop completes and no mismatch is found, return `true`.
*/
// */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
