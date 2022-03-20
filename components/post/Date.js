import styled from 'styled-components'

export function Date(props) {
  return <TimeStyled>{props.children}</TimeStyled>
}

const TimeStyled = styled.time`
  font-size: 10px;
  position: absolute;
  bottom: 7px;
  right: 7px;
`
