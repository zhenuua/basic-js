const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let arr =  matrix.flat(1);
    let result = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === '^^'){
        result += 1
      }
    }
    return  result
}

  
  //throw new CustomError('Not implemented');
  
