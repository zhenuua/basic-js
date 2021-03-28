const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let new_array = members
    .filter(item => typeof item === 'string')
    .map((name) => name.trim().toUpperCase()[0])
    .sort();
    
  return new_array.join('')
}

