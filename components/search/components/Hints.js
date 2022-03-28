// hits for tag and post names, doesn't to a post content
import { useContext, useEffect } from 'react'
import { PostsContext } from '/pages/posts/index'

export function Hints(props) {
  const { showHintsState, setShowHintsState, hintsRef, inputRef } = useContext(PostsContext)

  function onClickHandler(e) {
    const clickedEl = e.target
    const hintsEl = hintsRef.current
    const inputEl = inputRef.current

    if (!hintsEl) return // nothing to close
    const clickedInsideHints = hintsEl.contains(clickedEl)
    if (clickedInsideHints) return // do not close
    const clickedInsideInput = inputEl.contains(clickedEl)
    if (clickedInsideInput) return
    setShowHintsState(false)
  }
  
  useEffect(() => {
    console.log('hi')
    document.addEventListener('click', onClickHandler)
    return () => { document.removeEventListener('click', onClickHandler) }
  }, [])

  return ( 
    <>
      {showHintsState && <div ref={hintsRef}>{props.children}</div>}
      
      <style jsx>{`
        div {
          position: absolute;
          top: 60px;
          max-height: 117px;
          overflow: auto;
          left: 0px;
          right: 0px;
          border-radius: 4px;
          border: 1px solid #adadad;
          margin: 0px 5px;
          padding: 5px 5px;
          background-color: #f9f9f9;
          box-shadow: 0 0 10px 2px #0000003d
        }
      `}</style>
    </>
  )
}
