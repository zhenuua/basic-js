const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(string, key) {
    if (!string || !key) {
      throw new Error();
    }
    if (this.isDirectMachine === false) {
      string = string.split('').reverse().join('');
      return string;
    }
    
    while (string.length > key.length){
      key += key
    }
    let result = '';
    string.toUpperCase();
    key.toUpperCase();
      for (let i = 0; i < string.length; i++){
      if (string[i] == ' '){
          result += string[i]
        }
      let a = string[i].charCodeAt(0)
        let b = key[i].charCodeAt(0)
        
        result += String.fromCharCode(65 + (a - b))
      }
    return result
  }
      
  decrypt(string, key){
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
