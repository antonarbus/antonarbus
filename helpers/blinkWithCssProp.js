// blinkWithCssProp.js
export default function blinkWithCssProp(args) {
  const { el, cssPropToChange, value, time } = {
    el: null, cssPropToChange: 'borderColor', value: 'red', time: 500, ...args
  }
  if (!el) return
  if (el.hasAttribute('blinking')) return
  el.setAttribute('blinking', '')
  const initValue = el.style[cssPropToChange]
  el.style[cssPropToChange] = value
  setTimeout(() => {
    el.style[cssPropToChange] = initValue
    el.removeAttribute('blinking')
  }, time)
}
