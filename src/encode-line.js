const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  console.log('str: ', str);
  if (str.length === 0) {
    return str;
  }

  let encodeSum = '';
  let count = 1;

  for (let i = 1; i < str.length; i += 1) {
    if (str[i - 1] === str[i]) {
      count += 1;
    } else {
      if (count > 1) {
        encodeSum += count + str[i - 1];
      } else {
        encodeSum += str[i - 1];
      }
      count = 1;
    }
  }
  const lastLetter = str[str.length - 1];
  if (count > 1) {
    encodeSum += count + lastLetter;
  } else {
    encodeSum += lastLetter;
  }
  console.log('encodeSum: ', encodeSum);
  return encodeSum;
}

module.exports = {
  encodeLine
};
