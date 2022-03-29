export default function areElsFromSmallArrInsideBigArr(smallArr, bigArr) {
  const smallARR = smallArr.map(el => el.toLowerCase())
  const bigARR = bigArr.map(el => el.toLowerCase())
  return smallARR.every(elem => bigARR.includes(elem))
}
