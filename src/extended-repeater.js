const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  str = String(str);
  console.log('str: ', str);

  if (options === undefined || options === null) {
    options = {};
  }

  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const separator = options.separator !== undefined ? String(options.separator) : '+';
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';

  const additions = [];

  for (let i = 1; i <= additionRepeatTimes; i += 1) {
    additions.push(addition);
  }

  const additionStr = additions.join(additionSeparator);
  console.log('additionaSeparator: ', additionSeparator);
  console.log('additionStr: ', additionStr);

  const intermediateResult = str + additionStr;
  const results = [];

  for (let i = 1; i <= repeatTimes; i += 1) {
    results.push(intermediateResult);
  };

  console.log('results: ', results);
  const result = results.join(separator);
  console.log('separator: ', separator);
  console.log('result: ', result);
  return result;
}

module.exports = {
  repeater
};
