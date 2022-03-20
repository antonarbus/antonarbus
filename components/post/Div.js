import styled from 'styled-components'

export function Div(props) {
  return <DivStyled>{props.children}</DivStyled>
}

const DivStyled = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: flex-start;
  width: 100%;
`
