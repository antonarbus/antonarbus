// src/helpers/functions/jsxToStr.js
export default function jsxToStr(el) {
  if (!el) return ''
  if (typeof el === 'string') return el
  const children = el.props && el.props.children
  if (children instanceof Array) { return children.map(jsxToStr).join('') }
  return jsxToStr(children)
}
