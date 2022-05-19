
// elements with display:flex are focusable in IE10-11
export default {
  element: 'span',
  mutate: function mutate(element) {
    element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
    element.innerHTML = '<span style="display: block;">hello</span>';
  }
};
//# sourceMappingURL=focus-flexbox-container.js.map