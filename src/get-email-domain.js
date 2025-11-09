const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  console.log('email: ', email);
  const symbolIndex = email.lastIndexOf('@');
  if (symbolIndex === -1) {
    return '';
  }
  const resultStrStart = symbolIndex + 1;
  console.log('resultStrStart: ', resultStrStart);
  const resultStr = email.substring(resultStrStart);
  console.log('resultStr: ', resultStr);
  return resultStr;
}

module.exports = {
  getEmailDomain
};
