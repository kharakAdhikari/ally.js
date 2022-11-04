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
//# sourceMappingURL=get-shadow-parent.js.map