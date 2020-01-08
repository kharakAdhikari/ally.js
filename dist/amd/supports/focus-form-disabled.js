(/* istanbul ignore next */ function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.focusFormDisabled = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    element: 'form',
    mutate: function mutate(element) {
      element.setAttribute('tabindex', 0);
      element.setAttribute('disabled', 'disabled');
    }
  };
  module.exports = exports['default'];
});
//# sourceMappingURL=focus-form-disabled.js.map