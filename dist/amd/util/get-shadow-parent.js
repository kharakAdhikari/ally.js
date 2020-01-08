(/* istanbul ignore next */ function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.getShadowParent = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getShadowParent = getShadowParent;
  /*
    Get the shadow root host element if the node passed in is in the shadow root
    USAGE:
      var shadowParent = getShadowParent(someNode)
  */
  function getShadowParent(node) {
    for (; node; node = node.parentNode) {
      if (node.toString() === '[object ShadowRoot]') {
        return node.host;
      }
    }
    return null;
  }
});
//# sourceMappingURL=get-shadow-parent.js.map