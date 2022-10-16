const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 4`
 *
 */
function countCats(matrix) {
  let countCat = 0;
  for (let i=0; i<matrix.length;i++) {
    if (matrix[i].includes('^^')) {
      const cats = matrix[i].filter((cat) => cat === '^^').length;
      countCat = countCat + cats
    }
  }
  return countCat
}

module.exports = {
  countCats
};

console.log(countCats([
    [0, 1, '^^'],
    [0, '^^', 2],
    ['^^', '^^', 2], [0, '^^', 2]
   ]))