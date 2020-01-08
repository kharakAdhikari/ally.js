
// Node.compareDocumentPosition is available since IE9
// see https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition

// callback returns true when element is contained by parent or is the parent suited for use with Array.some()
/*
  USAGE:
    var isChildOf = getParentComparator({parent: someNode});
    listOfElements.some(isChildOf)
*/

import { getShadowParent } from './get-shadow-parent';

export function getParentComparator() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      parent = _ref.parent,
      element = _ref.element,
      includeSelf = _ref.includeSelf;

  if (parent) {
    return function isChildOf(node) {
      var shadowParent = getShadowParent(node);
      return Boolean(includeSelf && node === parent || shadowParent === parent || parent.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY || shadowParent && parent.compareDocumentPosition(shadowParent) & Node.DOCUMENT_POSITION_CONTAINED_BY);
    };
  } else if (element) {
    return function isParentOf(node) {
      var shadowParent = getShadowParent(element);
      return Boolean(includeSelf && element === node || shadowParent === node || node.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY || shadowParent && node.compareDocumentPosition(shadowParent) & Node.DOCUMENT_POSITION_CONTAINED_BY);
    };
  }

  throw new TypeError('util/compare-position#getParentComparator required either options.parent or options.element');
}
//# sourceMappingURL=compare-position.js.map