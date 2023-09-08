/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  console.log(s);
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j < s.length; j++) {
      if (romanNumerals[s[i]] < romanNumerals[s[j]]) {
        var result = romanNumerals[s[j]] - romanNumerals[s[i]];
        console.log(result);
      } else {
        var result = romanNumerals[s[i]] + romanNumerals[s[j]];
        console.log(result);
      }
    }
  }
};
romanToInt('LX');
