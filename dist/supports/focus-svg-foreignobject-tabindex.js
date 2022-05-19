'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svg = require('./helper/svg');

exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = (0, _svg.generate)('<foreignObject tabindex="-1"><input type="text" /></foreignObject>');
    // Safari 8's quersSelector() can't identify foreignObject, but getElementyByTagName() can
    return element.querySelector('foreignObject') || element.getElementsByTagName('foreignObject')[0];
  },
  validate: _svg.validate

};
module.exports = exports['default'];
//# sourceMappingURL=focus-svg-foreignobject-tabindex.js.map