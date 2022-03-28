import Head from 'next/head'
import Search from '/components/search/Search'
import jsxToStr from '/functions/jsxToStr'
import { createContext, useState, useRef } from "react"
import { PostLinks } from '/components/posts/PostLinks'
export const PostsContext = createContext()

export default function Index(props) {
  // console.log(props)
  const [searchValState, setSearchValState] = useState('')
  const [showHintsState, setShowHintsState] = useState(true)
  const [tagsInHintsState, setTagsInHintsState] = useState(props.tags)
  const [postsInHintsState, setPostsInHintsState] = useState(props.posts)
  const [itemsInInput, setItemsInInput] = useState([
    // {word: true, tag: false, val: 'value'},
    // {word: false, tag: true, val: 'tag'},
  ])
  const hintsRef = useRef()
  const inputRef = useRef()

  const postsContextVal = {
    posts: props.posts,
    tags: props.tags,
    titles: props.titles,
    searchValState, setSearchValState,
    showHintsState, setShowHintsState,
    tagsInHintsState, setTagsInHintsState,
    postsInHintsState, setPostsInHintsState,
    itemsInInput, setItemsInInput,
    hintsRef,
    inputRef
  }
  return (
    <>
      <Head>
        <title>Posts list</title>
        <meta name="description" content="Table of content for posts about web dev" />
      </Head>
      <PostsContext.Provider value={postsContextVal}>
        <Search />
        <PostLinks />
      </PostsContext.Provider>
    </>
  )
}

export async function getStaticProps() {
  
  // go through files in /pages & get file names of pages
  const fs = require('fs')
  const folder = './pages/posts/'
  const fileNames = fs.readdirSync(folder)
  const pageNames = fileNames.filter(
    fileName => fileName.includes('.js') && fileName !== '_xxx.js' && fileName !== 'index.js' && !fileName.startsWith('private'),
  )

  // import all variables from files
  const imports = pageNames.map(pageName => import(`/pages/posts/${pageName}`))
  const modules = await Promise.all(imports)
  
  // get data about posts from 'postObj' variable from all files
  const posts = modules.map((module, index) => { 
    return {
      title: jsxToStr(module.postObj.title),
      description: module.postObj.description,
      fileName: pageNames[index],
      path: `/pages/posts/${pageNames[index]}`,
      url: `/posts/${pageNames[index].replace('.js', '')}`,
      tags: module.postObj.tags,
      bodyText: jsxToStr(module.postObj.body),
    }
  })
  const tags = posts.map(post => post.tags).flat(Infinity)
  const uniqueTags = [...new Set(tags)].sort((a, b) => a.localeCompare(b))
  const titles = posts.map(post => post.title).sort((a, b) => a.localeCompare(b))

  // pass it into the component as props
  return {
    props: {
      posts: posts,
      tags: uniqueTags, 
      titles: titles,
    },
  }
}
