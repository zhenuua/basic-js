const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],
   getLength() {
    return this.chain.length
   },
   addLink(value) {
     this.chain.push(value)
     return this
   },
   removeLink(position) {
     if (position <= 0 || typeof position == 'string'){
       this.chain =[];
       throw new Error();
     }
     this.chain.splice(position-1, 1);
     return this
   },
   reverseChain() {
     this.chain.reverse()
     return this
   },
   finishChain() {

     let xxx = this.chain
     .map((i) => `( ${i} )`)
     .join('~~') 
     this.chain =[];
     return xxx;
   }
 };

module.exports = chainMaker;
