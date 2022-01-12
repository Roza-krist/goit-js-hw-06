// const decreaseBtn = document.querySelector("[data-action ='decrement']");
// // console.log(decreaseBtn);
// let valueRef = document.querySelector("#value");
// // console.log(valueRef);
// const increaseBtn = document.querySelector("[data-action='increment']");
// let counterValue = 0;
// decreaseBtn.addEventListener("click", () => {
//   console.log("Minus 1");
//   valueRef -= 1;
// });
// increaseBtn.addEventListener("click", () => {
//   valueRef += 1;
//   console.log("valueRef", valueRef);
//   console.log("Plus 1");
// });
const CounterPlugin = function ({ counter, initialValue = 0, step = 1 } = {}) {
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(counter);

  this._bindEvents();
  this.updateValueUI();
};

CounterPlugin.prototype._getRefs = function (counter) {
  const refs = {};
  refs.container = document.querySelector(counter);
  refs.increaseBtn = refs.container.querySelector("[data-action='increment']");
  refs.decreaseBtn = refs.container.querySelector("[data-action ='decrement']");
  refs.counterValue = refs.container.querySelector("#value");
  return refs;
};
CounterPlugin.prototype._bindEvents = function () {
  this._refs.increaseBtn.addEventListener("click", () => {
    this.increment();
    this.updateValueUI();
  });

  this._refs.decreaseBtn.addEventListener("click", () => {
    this.decrement();
    this.updateValueUI();
  });
};

CounterPlugin.prototype.updateValueUI = function () {
  this._refs.counterValue.textContent = this._value;
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};
CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};
new CounterPlugin({ counter: "#counter", step: 1 });
