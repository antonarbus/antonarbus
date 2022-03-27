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
    setShowHintsState,
  } = useContext(PostsContext)
  

  function tagsForHints(e) {
    const inputVal = e.target.value
    if(!inputVal.trim()) return setTagsInHintsState([])
    const foundTags = tags.filter(tag => tag.toLowerCase().trim().includes(inputVal.toLowerCase().trim()))
    setTagsInHintsState(foundTags)
  }

  function postsForHints(e) {
    const inputVal = e.target.value
    if(!inputVal.trim()) return setPostsInHintsState([])
    const foundPosts = posts.filter(post => post.title.toLowerCase().trim().includes(inputVal.toLowerCase().trim()))
    setPostsInHintsState(foundPosts)
  }
  
  function inputHandler(e) {
    const inputVal = e.target.value
    setSearchValState(inputVal)
    tagsForHints(e)
    postsForHints(e)
  }

  return (
    <>
      <input placeholder='Search' value={searchValState} onChange={inputHandler} />
      
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
          font-family: "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-sans;
          font-weight: 100;
        }
      `}</style>
    </>
  )
}
