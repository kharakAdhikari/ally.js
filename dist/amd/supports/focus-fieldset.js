(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.focusFieldset = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    element: 'fieldset',
    mutate: function mutate(element) {
      element.innerHTML = '<legend>legend</legend><p>content</p>';
    }
  };
  module.exports = exports['default'];
});
//# sourceMappingURL=focus-fieldset.js.map