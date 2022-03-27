import Link from "next/link"
import { useContext } from 'react'
import { PostsContext } from '/pages/posts/index'

export function PostsInHints(props) {
  const postsInHintsState = useContext(PostsContext).postsInHintsState

  return (
    <>
      {postsInHintsState.map(post => <Link href={post.url} key={post.title}><a>{post.title}</a></Link> )}

      <style jsx>{`
        a {
          display: inline-block;
          position: relative;
          padding: 2px 5px ;
          margin: 5px;
          border: 1px solid #0083bf;
          border-radius: 3px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          color: grey;
          color: #0083bf;
          font-size: 12px;
          font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
          vertical-align: middle;
          user-select: none;
        }
      `}</style>
    </>
  )
}
