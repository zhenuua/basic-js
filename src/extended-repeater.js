const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str === true) {
    str = 'true';
  }
  if (str === null) {
    str = 'null';
  }
  if (!options.separator) {
    options.separator = '+'
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if (!options.additionRepeatTimes && options.addition) {
    options.additionRepeatTimes = 1;
  }

  for (let j = 0; j < options.additionRepeatTimes; j++) {
    str += options.addition
    if (j !== options.additionRepeatTimes - 1) {
      str += options.additionSeparator
    }
  }

  const a = str
  for (let i = 0; i < options.repeatTimes - 1; i++) {
    if (i !== options.repeatTimes - 1) {
      str += options.separator
    }
    str += a
  }
  
  return str
}