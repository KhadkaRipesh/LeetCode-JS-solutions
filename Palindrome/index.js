/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var str = x.toString();
  var toCheck = '';
  for (var i = str.length - 1; i >= 0; i--) {
    toCheck += str[i];
  }
  if (toCheck == x) {
    console.log('Is Palindrome');
  } else {
    console.log('Is Not Palindrome');
  }
};
isPalindrome(123);
