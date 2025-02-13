const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrayNumber = String(n).split('');
  let result = [];
  for (let i=0; i<String(n).split('').length; i++) {
    let newArray = arrayNumber.slice();
    newArray.splice(i, 1);
    result.push(newArray.join(''));
  }
  return Number(Math.max(...result));
}

module.exports = {
  deleteDigit
};
