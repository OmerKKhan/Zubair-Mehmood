// Task # 1
// Given a string x, return true if x is palindrome.

// An string is a palindrome when it reads the same backward as forward.

// For example, acca is a palindrome while acba is not.
//Example : abcba
//Example: abcd

var isPalindrome = function(s) {
  // var x = 'abcbba'; i=0,j=5
  //i=2,j=3
  for (let [i,j]=[0,s.length-1]; i<j;) {
        if (s[i]!=s[j]) {//s[i]=c,s[j]=b
            return false
        }
        i++
        j--
    }

  return true
};


// Task # 2
// Given a integer x, return x with its digits reversed. 
// Input x=123, Expected output 321
// Input x=3928, Expected output 8293
// Input x=4, Expected output 4

var ReverseNumber = function(x) {
 var x = 123;
  x.
};