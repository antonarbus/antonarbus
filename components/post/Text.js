import styled from 'styled-components'

export function Text(props) {
  return <PStyled>{props.children}</PStyled>
}

const PStyled = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: flex-start;
  width: 100%;
`
