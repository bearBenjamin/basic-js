const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = -Infinity;
  const str = n.toString();
  
  for (let i = 0; i < str.length; i += 1) {
    const newStr = str.slice(0, i) + str.slice(i + 1);
    const newNum = Number(newStr);
    
    if (newNum > max) {
      max = newNum;
    }
  }

  console.log('max: ', max);
  return max;
}

module.exports = {
  deleteDigit
};
