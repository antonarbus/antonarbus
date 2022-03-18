export default function returnAllTagsFromArr(arr) {
  // Set can have only unique vals
  const allTags = new Set()
  // add els to Set
  arr.forEach(o => o.tagsArr.forEach(tag => allTags.add(tag)))
  // convert to arr & sort
  return Array.from(allTags).sort((a, b) => a.localeCompare(b))
}
