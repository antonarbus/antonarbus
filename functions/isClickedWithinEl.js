export function isClickedWithinEl(clickedEl, el) {
  // clickedEl = e.target within event handler
  if (!el) return
  return el.contains(clickedEl)
}
