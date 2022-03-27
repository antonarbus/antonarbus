import { TagToSearch } from "./TagToSearch";
import { WordToSearch } from "./WordToSearch";
import { useContext } from 'react'
import { PostsContext } from '/pages/posts/index'

export function TagsInInput(props) {
  const { tagsToSearchState } = useContext(PostsContext)

  return (
    <>
      {tagsToSearchState.map(tag => <TagToSearch key={tag} tag={tag} />)}

      <WordToSearch word='word1' />
      <WordToSearch word='word2' />
      <WordToSearch word='word3' />
    </>
  )
}