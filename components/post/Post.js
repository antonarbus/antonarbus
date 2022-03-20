import { Title } from './Title.js'
import { Section } from './Section.js'
import { Date } from './Date.js'
import { Num } from './Num.js'
import { Tags } from './Tags.js'
import { Text } from './Text.js'
import { Output } from './Output.js'
import { Code } from './Code.js'
import { Img } from './Img.js'
import { Div } from './Div.js'
import styled from 'styled-components'

function jsxesFromPostParts(post) {
  // at the beginning I used array to combine a post, it was wrong decision
  // now post is just one jsx element in post.body property
  const postFromArr = post?.postParts?.map((el, index) => {
    const id = `${post.id}_part_${index}`
    if (el.type === 'text') return <Text key={id}>{el.val}</Text>
    if (el.type === 'code') {
      return (
        <Code key={id} lang={el.lang}>
          {el.val}
        </Code>
      )
    }
    if (el.type === 'output') return <Output key={id}>{el.val}</Output>
    if (el.type === 'img') {
      return (
        <Img
          key={id}
          src={el.src || el.link || el.path || el.val}
          width={el.width}
          alt={el.alt}
        />
      )
    }
    return <Div key={id}>{el.val}</Div>
  })

  return postFromArr || post.body
}

export function Post(props) {
  const post = props.post
  const title = post.title
  const num = post.postNum
  const tags = post.tagsArr
  const date = post.date
  const uriPostName = post.uriPostName

  return (
    <Article className="post">
      <Title uriPostName={uriPostName}>{title}</Title>
      <Section>
        {jsxesFromPostParts(post)}
        <Num>{num}</Num>
        <Tags tags={tags} />
        <Date>{date}</Date>
      </Section>
    </Article>
  )
}

const Article = styled.article`
  width: 100%;
`
