const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {   //исключает следующий за ней элемент исходного массива из преобразованного массива.
      arr.splice([i + 1], 1);
      arr.splice([i], 1);
    }
    if (arr[i] === '--discard-prev') { //исключает предшествующий ей элемент исходного массива из преобразованного массива
      arr.splice([i], 1);
      arr.splice([i - 1], 1);
      
    }
    if (arr[i] === '--double-next') {  //удваивает следующий за ней элемент исходного массива в преобразованном массиве.
      arr.splice([i], 1);
      arr.splice([i], 0, arr[i]);
    }
    if (arr[i] === '--double-prev') { //удваивает предшествующий ей элемент исходного массива в преобразованном массиве
      arr.splice([i], 1);
      arr.splice([i], 0, arr[i - 1]);
    }
  } return arr
};
