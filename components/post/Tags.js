import styled from 'styled-components'
import { Tag } from './Tag'

export function Tags(props) {
  const { tags } = props
  return (
    <DivStyled>
      {tags.map(tag => (
        <Tag tag={tag} key={tag} />
      ))}
    </DivStyled>
  )
}

const DivStyled = styled.div`
  margin-top: 20px; ;
`
