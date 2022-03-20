import styled from 'styled-components'
// if we do not provide any link specifically via 'link' or 'path or url' or 'src' it will be taken from the tag content (props.children)

export function Lnk(props) {
  return (
    <AStyled href={props.link || props.path || props.url || props.src || props.children} target="_blank">
      {props.text}
      {props.children}
    </AStyled>
  )
}

const AStyled = styled.a`
  color: #0098f7;
`
