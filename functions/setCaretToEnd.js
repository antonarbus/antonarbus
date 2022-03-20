export default function setCaretToEnd(el) {
  if (!el.childNodes.length) return
  const range = document.createRange()
  const sel = window.getSelection()
  const lastNode = el.childNodes[el.childNodes.length - 1]
  range.setStart(lastNode, lastNode.length)
  range.collapse(true)
  sel.removeAllRanges()
  sel.addRange(range)
  el.focus()
}
