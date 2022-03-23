// returns debounced function, not calling it
function debounce(fn, delay = 300) {
  let timeoutId
  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(function() {
      fn(...args)
    }, delay)
  }
}