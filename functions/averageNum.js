const averageNum = (...nums) => {
  let arr = []
  // may pass array or args separately
  if (!Array.isArray(nums)) arr = [...nums] // if primitive args supplied
  if (Array.isArray(nums)) arr = nums.flat(Infinity) // if array supplied
  const floatsArr = arr.map(el => parseFloat(el)) // in case numbers are passed as strings
  const averageNum = floatsArr.reduce((accum, curVal) => accum + curVal) / arr.length
  const roundedNum = averageNum.toFixed(2)
  return roundedNum
}
export default averageNum
