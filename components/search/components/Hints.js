// hits for tag and post names, doesn't to a post content
import { useContext } from 'react'
import { PostsContext } from '/pages/posts/index'

export function Hints(props) {
  const { tagsInHintsState, postsInHintsState } = useContext(PostsContext)

  return ( 
    <>
      {(!!tagsInHintsState.length || !!postsInHintsState.length) && <div>{props.children}</div>}
      
      <style jsx>{`
        div {
          position: absolute;
          top: 60px;
          left: 0px;
          right: 0px;
          border-radius: 4px;
          border: 1px solid #adadad;
          margin: 0px 5px;
          padding: 15px;
          background-color: #f9f9f9;
          box-shadow: 0 0 10px 2px #0000003d
        }
      `}</style>
    </>
  )
}
