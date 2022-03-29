import { useContext } from "react"
import { PostsContext } from '/pages/posts/index'

export function Input() {
  const {
    setInputValState,
    inputValState,
    tags,
    setTagsInHintsState,
    posts,
    setPostsInHintsState,
    itemsInInput, 
    setItemsInInput,
    setShowHintsState,
    inputRef,
  } = useContext(PostsContext)

  function tagsAndPostsForHints(e) {
    const inputVal = e.target.value
    setShowHintsState(true)
    if(!inputVal.trim()) {
      setTagsInHintsState(tags)
      setPostsInHintsState(posts)
    }
    const foundTags = tags.filter(tag => tag.toLowerCase().trim().includes(inputVal.toLowerCase().trim()))
    const foundPosts = posts.filter(post => post.title.toLowerCase().trim().includes(inputVal.toLowerCase().trim()))
    if(foundTags.length === 0 && foundPosts.length === 0) {
      setShowHintsState(false)
      return 
    }
    setTagsInHintsState(foundTags)
    setPostsInHintsState(foundPosts)
  }

  function wordsForInput(e) {
    const inputVal = e.target.value
    if (!inputVal.endsWith(' ')) return 
    const text = inputVal.trim().replaceAll('+', ' ')
    const isItemAlreadyIncluded = itemsInInput.some(item => item.text === true && item.val === text)
    if (isItemAlreadyIncluded) return
    const newItem = {val: text, tag: false, text: true}
    setItemsInInput([...itemsInInput, newItem])
    setInputValState('')
  }
  
  function onChangeHandler(e) {
    const inputVal = e.target.value
    setInputValState(inputVal)
    tagsAndPostsForHints(e)
    wordsForInput(e)
  }

  function onKeyDownHandler(e) {
    const inputVal = e.target.value
    if (e.code === "Backspace") {
      if (inputVal.length !== 0) return 
      itemsInInput.pop()
      setItemsInInput([...itemsInInput])
    }
  }

  function onFocusHandler(e) {
    setTagsInHintsState(tags)
    setPostsInHintsState(posts)
    setShowHintsState(true)
  }

  return (
    <>
      <input
        ref={inputRef}
        placeholder="Search"
        value={inputValState}
        onFocus={onFocusHandler}
        onKeyDown={onKeyDownHandler}
        onChange={onChangeHandler}
      />

      <style jsx>{`
        input {
          font-size: 20px;
          border: 0px solid grey;
          background: transparent;
          /* border-radius: 4px; */
          outline-style: none;
          width: 100%;
          padding: 5px;
          height: 100%;
          margin-left: 2px;
          min-width: 100px;
        }
        input::placeholder {
          font-family: 'system-ui', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-sans;
          font-weight: 100;
        }
      `}</style>
    </>
  )
}
