import Head from 'next/head'
import Link from 'next/link'
import jsxToStr from '/functions/jsxToStr'
// import * as posts from '/postsListReExport'

export default function Index(props) {
  return (
    <>
      <Head>
        <title>Table of content</title>
        <meta name='description' content='Table of content for posts about web dev' />
      </Head>

      <article>
        <title>Table of content</title>
        <section>
          {props.posts.map(post => (
            <div key={post.title}>
              <Link href={post.url}>
                <a target="_blank">{post.title}</a>
              </Link>
            </div>
          ))}
        </section>
      </article>

      

      <style jsx>{`
        article { 
          margin: 0 auto;
          margin-bottom: 20px;
          padding: 25px;
          max-width: 600px;
        }
        section {
          border-radius: 10px;
          font-size: 16px;
          padding: 20px;
          padding-bottom: 10px;
          background: white;
          position: relative;
          background-color: transparent;
          background-image: linear-gradient(to right bottom,rgb(255 255 255 / 90%),rgb(255 255 255 / 90%));
          box-shadow: #80808073 0px 0px 10px;
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
          height: 1.05em;
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
    }
  })

  // pass it into the component as props
  return {
    props: {
      posts: posts
    },
  }
}
