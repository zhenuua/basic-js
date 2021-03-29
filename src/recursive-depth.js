const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    if (!Array.isArray(arr)) {
      throw new Error();
    }
    let depth = 1;

    for (let i = 0; i < arr.length; i++) {

      let currentDepth;
    if (Array.isArray(arr[i])) {
      currentDepth = 1 + this.calculateDepth(arr[i]);
    }

    if(currentDepth > depth)
    {
      depth = currentDepth;
    }
    } 

    return depth;
}
}
