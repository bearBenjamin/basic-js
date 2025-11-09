const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const cols = matrix[0].length;

  for (let i = 0; i < cols; i += 1) {
    for (let j = 0; j < matrix.length; j +=1) {
      const currentValue = matrix[j][i];
      if (currentValue === 0) {
        break;
      } else {
        sum = sum + currentValue;
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
