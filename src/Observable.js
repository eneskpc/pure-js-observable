export const Observable = function () {
  var _value = undefined;
  var _observers = [];

  if (arguments[0]) {
    _value = arguments[0];
  }

  this.subscribe = function (observer) {
    if (typeof observer === "function") {
      _observers.push(observer);
    }
  };

  this.unsubscribe = function (observer) {
    if (typeof observer === "function") {
      _observers = _observers.filter((obs) => obs !== observer);
    }
  };

  Object.defineProperties(this, {
    value: {
      get: function () {
        return _value;
      },
      set: function (value) {
        if (_value === value) {
        }
        _value = value;
        for (let index = 0; index < _observers.length; index++) {
          _observers[index](_value);
        }
      },
    },
  });
};
