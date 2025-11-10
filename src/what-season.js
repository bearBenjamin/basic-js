const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  console.log('date in: ', date);
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (typeof date !== 'object' || !(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }


  const month = date.getMonth();
  

  switch (month) {
    case 11: // Декабрь
    case 0:  // Январь
    case 1:  // Февраль
    
      return 'winter';
    case 2:  // Март
    case 3:  // Апрель
    case 4:  // Май
    
      return 'spring';
    case 5:  // Июнь
    case 6:  // Июль
    case 7:  // Август
    
      return 'summer';
    case 8:  // Сентябрь
    case 9:  // Октябрь
    case 10: // Ноябрь
    
      return 'autumn';
  }
}

module.exports = {
  getSeason
};
