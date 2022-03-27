import { TagInHint } from "./TagInHint";
import { useContext } from 'react'
import { PostsContext } from '/pages/posts/index'

export function TagsInHints(props) {
  const tagsInHintsState = useContext(PostsContext).tagsInHintsState

  return (
    <>
      {tagsInHintsState.map(tag => <TagInHint key={tag} tag={tag} />)}
    </>
  )
}
