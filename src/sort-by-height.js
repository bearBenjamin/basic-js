const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortHeights = [];
  arr.forEach((item) => {
    if (item !== -1) {
      sortHeights.push(item);
    }
  });

  const result = [];
  let count = 0;
  sortHeights.sort((a, b) => a - b);

  arr.forEach((item) => {
    if (item === -1) {
      result.push(item);
    } else {
      result.push(sortHeights[count]);
      count += 1;
    }
  });
  
  return result;
}

module.exports = {
  sortByHeight
};
