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
    <h3 ref={ref} onClick={addHashToUrl}>
      {props.children}

      <style jsx>{`
        h3 {
          cursor: pointer;
          font-size: 20px;
          margin-top: 20px;
          text-align: center;
        }
      `}</style>
    </h3>
  )
}
