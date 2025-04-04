const romanToInt = function (s) {
  //Start coding here
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let prevValue = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanNumerals[s[i]];
      // IV = 5 - 1 = 4
      // VI = 5 + 1 = 6
    if (currentValue < prevValue) {
      total -= currentValue;
    } else {
      
      total += currentValue;
    }
    prevValue = currentValue;
  }
  return total;
};

const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);
