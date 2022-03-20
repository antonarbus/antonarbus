export default function areWordsInText(wordsArr, text) {
  const wordsArrL = wordsArr.map(el => el.toLowerCase())
  const textL = text.toLowerCase()
  return wordsArrL.every(elem => textL.includes(elem))
}
