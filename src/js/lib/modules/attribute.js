import $ from '../core';

$.prototype.getAtt = function (dataName) {
  if (!dataName) return this;
  for (let i = 0; i < this.length; i++) {
    const dataAttribute = this[i].getAttribute(dataName);
    console.log(dataAttribute);
    return this;
  }
};

$.prototype.hasAtt = function (dataName) {
  if (!dataName) return this;
  for (let i = 0; i < this.length; i++) {
    const dataAttribute = this[i].hasAttribute(dataName);
    console.log(dataAttribute);
    return this;
  }
};
