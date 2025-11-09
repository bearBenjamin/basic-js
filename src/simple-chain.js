const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let linkString;
    if (value === undefined) {
      linkString = '(  )';
    } else {
      linkString = '( ' + String(value) + ' )';
    }
    this.chain.push(linkString);
    return this;
    
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
       this.chain = [];
      throw new Error ('You can\'t remove incorrect link!');
    }
    const indexToRemove = position - 1;
    this.chain.splice(indexToRemove, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
