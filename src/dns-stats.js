const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const count = {};

  for (let i = 0; i < domains.length; i += 1) {
    const namesDomen = domains[i].split('.');
    const currentNamesDomen = [];
    let strNameDomen = ''
    for (let j = namesDomen.length - 1; j >= 0; j -= 1) {
      strNameDomen = strNameDomen + '.' +  namesDomen[j] ;
      currentNamesDomen.push(strNameDomen);
    }

    for (let k = 0; k < currentNamesDomen.length; k += 1) {
      count[currentNamesDomen[k]] = (count[currentNamesDomen[k]] || 0) + 1;
    }
  }

  console.log('count: ', count);
  return count;
}

module.exports = {
  getDNSStats
};
