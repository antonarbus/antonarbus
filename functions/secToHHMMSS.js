export default function secToHHMMSS(sec = 0) {
  const hours = Math.floor(sec / (60 * 60))
  const remainingSec = sec % (60 * 60)
  const minutes = Math.floor(remainingSec / 60)
  const seconds = remainingSec % 60
  const addZeroToNum = (num) => num.toString().length === 1 ? `0${num}` : num
  const HH = addZeroToNum(hours)
  const MM = addZeroToNum(minutes)
  const SS = addZeroToNum(seconds)
  return `${HH}:${MM}:${SS}`
}
