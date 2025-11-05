const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // console.log('sampleActivy: ', sampleActivity);
  // console.log('typeof sampleActivy: ', typeof sampleActivity);
  // console.log('');
  if (sampleActivity === undefined) return false;
  if (typeof sampleActivity !== 'string') return false;

  let numActivity;

  if (isNaN(sampleActivity)) {
    numActivity = sampleActivity.replace(/\D/g, '');
  } else {
    numActivity = Number(sampleActivity);
  }
  // console.log('numActivity: ', numActivity);
  // console.log('');

  if (numActivity <= 0 || numActivity >= MODERN_ACTIVITY) {
    return false;
  }

  const age = (Math.log(MODERN_ACTIVITY / numActivity) / 0.693) * HALF_LIFE_PERIOD;
  console.log('age: ', age);
  console.log('')
  return Math.ceil(age);
}

module.exports = {
  dateSample
};
