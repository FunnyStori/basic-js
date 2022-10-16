const { NotImplementedError } = require('../extensions/index.js');

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
const obj = {
  repeatTimes: 1,
  separator: '+',
  addition: '',
  additionRepeatTimes: 1,
  additionSeparator: '|'
 }

 for (let option in options) {
  if(obj.hasOwnProperty(option)) {
    obj[option] = options[option];
  }
 }

 let array = [];
 for (let i = 0; i < obj.repeatTimes; i++) {
  array.push(String(str));
  for (let j = 0; j < obj.additionRepeatTimes; j++) {
    if (j != obj.additionRepeatTimes - 1) {
      array.push(String(obj.addition) + obj.additionSeparator);
    } else {
      array.push(String(obj.addition));
    }
  }
  if(i != obj.repeatTimes - 1) {
    array.push(obj.separator);
   }
}
return array.join('');
}

module.exports = {
  repeater
};
