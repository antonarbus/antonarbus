import { useContext } from "react"
import { PostsContext } from '/pages/posts/index'

export function Input() {
  const {
    setSearchValState,
    searchValState,
    tags,
    setTagsInHintsState,
    posts,
    setPostsInHintsState,
    itemsInInput, 
    setItemsInInput,
    setShowHintsState,
    inputRef,
  } = useContext(PostsContext)

  function tagsForHints(e) {
    const inputVal = e.target.value
    if(!inputVal.trim()) return setTagsInHintsState(tags)
    const foundTags = tags.filter(tag => tag.toLowerCase().trim().includes(inputVal.toLowerCase().trim()))
    setTagsInHintsState(foundTags)
  }

  function postsForHints(e) {
    const inputVal = e.target.value
    if(!inputVal.trim()) return setPostsInHintsState(posts)
    const foundPosts = posts.filter(post => post.title.toLowerCase().trim().includes(inputVal.toLowerCase().trim()))
    setPostsInHintsState(foundPosts)
  }
  
  function onChangeHandler(e) {
    const inputVal = e.target.value
    setSearchValState(inputVal)
    tagsForHints(e)
    postsForHints(e)
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
        value={searchValState}
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
