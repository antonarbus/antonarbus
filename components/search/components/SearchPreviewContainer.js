import styled from 'styled-components'

export function SearchPreviewContainer(props) {
  return (
    <Div>
      {props.children}
    </Div>
  )
}

export const Div = styled.div`
  position: absolute;
  top: 50px;
  left: 0px;
  right: 0px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: #adadad;
  padding: 35px 10px 10px 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 2px #0000003d
`
