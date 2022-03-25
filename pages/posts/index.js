import Head from 'next/head'
import Link from 'next/link'

import { LinkBox } from '../../components/posts/LinkBox'
import Search from '/components/search/Search'
import jsxToStr from '/functions/jsxToStr'

export default function Index(props) {
  console.log(props)
  return (
    <>
      <Head>
        <title>Posts list</title>
        <meta name="description" content="Table of content for posts about web dev" />
      </Head>

      <Search />

      <div className="center">
        <title>Posts</title>
        {props.posts.map(post => (
          <LinkBox key={post.title}>
            <Link href={post.url}><a>{post.title}</a></Link>
          </LinkBox>
        ))}
      </div>

      <style jsx>{`
        .center {
          margin: 0 auto;
          margin-bottom: 20px;
          margin-top: 100px;
          max-width: 90vw;
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

export async function getStaticProps() {
  
  // go through files in /pages & get file names of pages
  const fs = require('fs')
  const folder = './pages/posts/'
  const fileNames = fs.readdirSync(folder)
  const pageNames = fileNames.filter(
    fileName => fileName.includes('.js') && fileName !== '_xxx.js' && fileName !== 'index.js',
  )

  // import all variables from files
  const imports = pageNames.map(pageName => import(`/pages/posts/${pageName}`))
  const modules = await Promise.all(imports)
  
  // from 'postObj' variable from all files get data about posts
  const posts = modules.map((module, index) => { 
    return {
      title: jsxToStr(module.postObj.title),
      description: module.postObj.description,
      fileName: pageNames[index],
      path: `/pages/posts/${pageNames[index]}`,
      url: `/posts/${pageNames[index].replace('.js', '')}`,
      tags: module.postObj.tags,
      bodyText: jsxToStr(module.postObj.body)
    }
  })

  // pass it into the component as props
  return {
    props: {
      posts: posts
    },
  }
}
