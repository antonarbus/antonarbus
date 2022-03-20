import React from 'react'
import styled from 'styled-components'
import idFromPropsChildrenWithJSX from '/functions/idFromPropsChildrenWithJSX'

export function H3(props) {
  const ref = React.useRef(null)

  React.useEffect(() => {
    ref.current.id = idFromPropsChildrenWithJSX(props.children)
  }, [])

  function addHashToUrl() {
    history.pushState({}, '', '#' + idFromPropsChildrenWithJSX(props.children))
    ref.current.scrollIntoView({ behavior: 'smooth', alignToTop: true })
  }

  return (
    <H3Styled
      ref={ref}
      onClick={addHashToUrl}
    >
      {props.children}
    </H3Styled>
  )
}

const H3Styled = styled.h3`
  cursor: pointer;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`
