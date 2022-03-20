import styled from 'styled-components'

export function Output(props) {
  return <DivStyled>{props.children}</DivStyled>
}

const DivStyled = styled.div`
  background: white;
  padding: 0.5em;
  margin: 10px 0px;
  overflow: auto;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 3px 12px rgb(0 0 0 / 7%), 0 1px 4px rgb(0 0 0 / 7%);
  margin: 20px 0px;;
`
