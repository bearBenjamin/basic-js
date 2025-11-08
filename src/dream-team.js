const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const filterMembers = members.filter(Boolean);
  const newMembers = filterMembers.filter((item) => typeof item === 'string');
  const letters = newMembers.map((item) => {
    item = item.trim();
    return item[0].toUpperCase();
  });
  const sortLetters = letters.sort();
  const result = sortLetters.join('');
  return result;
}

module.exports = {
  createDreamTeam
};
