const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let maxNestedDepth = 0;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        const currentDepth = this.calculateDepth(item);
        maxNestedDepth = Math.max(maxNestedDepth, currentDepth)
      }
    });
    return 1 + maxNestedDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
