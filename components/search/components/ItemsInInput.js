import { TagInInput } from "./TagInInput"
import { WordInInput } from "./WordInInput"
import { useContext } from 'react'
import { PostsContext } from '/pages/posts/index'

export function ItemsInInput(props) {
  const { itemsInInput } = useContext(PostsContext)

  return (
    <>
      {itemsInInput.map(item => {
        if(item.tag) return <TagInInput key={item.val} tag={item.val} />
        if(item.text) return <WordInInput key={item.val} text={item.val} />
      })}
    </>
  )
}