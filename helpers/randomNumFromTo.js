export default function randomNumFromTo(from, to) {
  from = parseInt(from)
  to = parseInt(to)
  if (from === to && from === 0) [from, to] = [1, 100]
  if (isNaN(from) || isNaN(to)) [from, to] = [1, 100]
  if (from > to) [from, to] = [to, from]
  return Math.floor(Math.random() * (to - from + 1) + from)
}
