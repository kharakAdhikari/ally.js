(/* istanbul ignore next */ function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './get-shadow-parent'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./get-shadow-parent'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.getShadowParent);
    global.comparePosition = mod.exports;
  }
})(this, function (exports, _getShadowParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getParentComparator = getParentComparator;
  function getParentComparator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        parent = _ref.parent,
        element = _ref.element,
        includeSelf = _ref.includeSelf;

    if (parent) {
      return function isChildOf(node) {
        var shadowParent = (0, _getShadowParent.getShadowParent)(node);
        return Boolean(includeSelf && node === parent || shadowParent === parent || parent.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY || shadowParent && parent.compareDocumentPosition(shadowParent) & Node.DOCUMENT_POSITION_CONTAINED_BY);
      };
    } else if (element) {
      return function isParentOf(node) {
        var shadowParent = (0, _getShadowParent.getShadowParent)(element);
        return Boolean(includeSelf && element === node || shadowParent === node || node.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY || shadowParent && node.compareDocumentPosition(shadowParent) & Node.DOCUMENT_POSITION_CONTAINED_BY);
      };
    }

    throw new TypeError('util/compare-position#getParentComparator required either options.parent or options.element');
  }
  // Node.compareDocumentPosition is available since IE9
  // see https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition

  // callback returns true when element is contained by parent or is the parent suited for use with Array.some()
  /*
    USAGE:
      var isChildOf = getParentComparator({parent: someNode});
      listOfElements.some(isChildOf)
  */
});
//# sourceMappingURL=compare-position.js.map