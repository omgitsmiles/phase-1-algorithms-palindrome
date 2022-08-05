function isPalindrome(word) {
  // Write your algorithm here
  const splitWord = word.split('')
  const reverseWord = splitWord.reverse()
  const joinWord = reverseWord.join('')
  // if (joinWord === word){
  // return true
  // } else {
  // return false
  // }
  return joinWord === word
}

/* 
  Add your pseudocode here
  declare three variables that will split, reverse, and join the string 
  write conditional if that if the resulting func string is equal to string its true
  else return false
*/

/*
  Add written explanation of your solution here
  to check if string can be read backwards, it first has to split to be turned into an array
  the reverse string turned array and reverse the array-ified letters. 
  join will return the array back into a string, but in reverse.
  write a conditional statement that if it functions string matches the argument it will return true, else false
*/

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
