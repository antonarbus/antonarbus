import Link from "next/link";
import { useContext } from "react";
import { LinkBox } from "./LinkBox";
import { PostsContext } from '/pages/posts/index'

export function PostLinks(props) {
  const {foundPostsState} = useContext(PostsContext)
  return (
    <>
      <div className="center">
        <title>Posts</title>
        <div className="container">
          {foundPostsState.map(post => (
            <LinkBox key={post.title}>
              <Link href={post.url}><a>{post.title}</a></Link>
            </LinkBox>
          ))}
        </div>
      </div>

      <style jsx>{`
        .center {
          margin: 0 auto;
          margin-bottom: 20px;
          margin-top: 100px;
          max-width: 90vw;
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: flex-start;

        }
        title {
          display: block;
          margin: 25px 0px;
          font-size: 24px;
          text-align: center;
          font-weight: 400;
        }
        a {
          color: #0083bf;
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
          vertical-align: bottom;
        }
        a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 17px;
          background-color: #0083bf;
          transform: translateX(-100%) translateY(1em);
        }
        a:hover::after,
        a:focus::after {
          transform: translateX(0%) translateY(1em);
          transition: transform 300ms;
        }
      `}</style>
    </>
  )
}
