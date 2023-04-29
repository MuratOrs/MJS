import $ from '../core';

$.prototype.addClass = function (...classNames) {
  if (classNames.length < 1) return this;
  for (let i = 0; i < this.length; i++) {
    this[i].classList.add(...classNames);
  }

  return this;
};

$.prototype.removeClass = function (...classNames) {
  if (classNames) {
    for (let i = 0; i < this.length; i++) {
      this[i].classList.remove(...classNames);
    }
  }

  return this;
};

$.prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.toggle(className);
  }

  return this;
};

//Добавить функционал, проверяющий налие у элемента класса
