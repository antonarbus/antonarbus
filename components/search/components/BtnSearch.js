import { useContext } from "react"
import { PostsContext } from '/pages/posts/index'

export function BtnSearch() {
  const {
    posts,
    setInputValState,
    inputValState,
    itemsInInput, 
    setItemsInInput,
    setFoundPostsState,
    searchBtnRef
  } = useContext(PostsContext)

  function search() {
    let newItemsInInput = [...itemsInInput];

    // addTextIntoInputItem
    const text = inputValState.trim()
    if (!text) return
    // add input value text into the 
    const isItemAlreadyIncluded = itemsInInput.some(item => item.text === true && item.val === text)
    if (isItemAlreadyIncluded) return
    const newItem = {val: text, tag: false, text: true}
    newItemsInInput = [...itemsInInput, newItem]
    setItemsInInput(newItemsInInput)
    setInputValState('')

    // filter posts and show on screen
    const tagsToSearch = newItemsInInput.filter(item => item.tag).map(item => item.val)
    const textsToSearch = newItemsInInput.filter(item => item.text).map(item => item.val) 
    const foundPosts = posts
      .filter(post => tagsToSearch.every(tagToSearch => post.tags.includes(tagToSearch)))
      .filter(post => textsToSearch.every(textToSearch => post.bodyText.includes(textToSearch)))
    setFoundPostsState(foundPosts)
  }

  return (
    <button onClick={search} ref={searchBtnRef}>
      Search

      <style jsx>{`
        button {
          font-size: 20px;
          border-radius: 4px;
          border-width: 1px;
          outline-style: none;
          border-style: solid;
          border-color: #c0c0c0;
          width: auto;
          height: 40px;
          padding: 0px 10px;
          margin-left: 10px;
          cursor: pointer;
          background-color: transparent;
          background-image: linear-gradient(to right bottom,rgb(255 255 255 / 85%),rgb(255 255 255 / 95%));
        }
        button:hover,
        button:focus {
          border-color: grey;
          transition: border-color 200ms ease;
        }
      `}</style>
    </button>
  )
}

