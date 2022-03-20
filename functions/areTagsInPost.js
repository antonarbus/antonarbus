export default function areTagsInPost(smallArr, bigArr) {
  const smallArrL = smallArr.map(el => el.toLowerCase())
  const bigArrL = bigArr.map(el => el.toLowerCase())
  return smallArrL.every(elem => bigArrL.includes(elem))
}
