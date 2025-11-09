const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => 
    Array.from({ length: cols }, () => 0));

  matrix.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col) {
        for (let r = rowIndex - 1; r <= rowIndex + 1; r += 1) {
          for (let c = colIndex - 1; c <= colIndex + 1; c += 1) {
            if (r === rowIndex && c === colIndex) {
              continue;
            }
            if (r >= 0 && r < rows && c >= 0 && c < cols) {
              result[r][c] += 1;
            }
          }
        }
      }
    });
  });
  return result;
}

module.exports = {
  minesweeper
};
