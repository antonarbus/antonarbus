
// pages/styled-cmpt.js
import styled from 'styled-components'

export default function Index() {
  return (
    <Div>
      <h3>h3</h3>
      <div>div</div>
    </Div>
  )
}

const Div = styled.div`
  border: 5px solid green;
  padding: 5px;
  h3 { color: orange; }
  div { color: blue; }
`
