import Link from 'next/link'
import styled from 'styled-components'

export function Title(props) {
  return (
    <H3Styled className="title">
      <Link href={`/post/${props.uriPostName}`} >
        <a> {props.children} </a>
      </Link>
    </H3Styled>
  )
}

const H3Styled = styled.h3`
  display: block;
  margin-top: 40px;
  margin-bottom: 25px;
  font-size: 24px;
  text-align: center;
  line-height: 1.6;
  font-weight: 400;

  a {
    color: white;
    opacity: .8;

    &:hover {
      text-decoration-color: white;
      opacity: .8;
    }
  }

  code {
    background: #555555;
  }
`
