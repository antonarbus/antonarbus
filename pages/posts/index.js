import * as posts from '/postsListReExport'
import('/pages/posts/babel.js')
  .then((module) => {
    console.log(module)
  })

export default function Index(props) {

  

  console.log(posts)
  return <div>{JSON.stringify(props.pages)}</div>
}

export async function getStaticProps() {
  return {
    props: {
    },
  }
}
