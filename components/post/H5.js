import React from 'react'
import styled from 'styled-components'
import idFromPropsChildrenWithJSX from '/functions/idFromPropsChildrenWithJSX'

export function H5(props) {
  const ref = React.useRef(null)

  React.useEffect(() => {
    ref.current.id = idFromPropsChildrenWithJSX(props.children)
  }, [])

  function addHashToUrl(e) {
    history.pushState({}, '', '#' + idFromPropsChildrenWithJSX(props.children))
    ref.current.scrollIntoView({ behavior: 'smooth', alignToTop: true })
  }

  return (
    <h5 ref={ref} onClick={addHashToUrl}>
      {props.children}

      <style jsx>{`
        h5 {
          cursor: pointer;
          font-size: 18px;
          color: #5e5c5c;
          margin-top: 20px;
          text-align: center;
        }
      `}</style>
    </h5>
  )
}
