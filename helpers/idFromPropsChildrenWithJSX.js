import jsxToStr from './jsxToStr'

function isIterable (value) {
  return Symbol.iterator in Object(value);
}

export default function idFromPropsChildrenWithJSX(propsChildren) {
  const charsNotAllowedForId = /^[^a-zA-Z]+|[^\w:.-]+/g
  const arr = isIterable(propsChildren) ? [...propsChildren] : [propsChildren]
  return arr.map(value => jsxToStr(value).replace(charsNotAllowedForId, '').toLowerCase()).join('')
}
