import { useEffect, useRef } from 'react'

export function Code(props) {
  const ref = useRef()
  let maxHeightVal
  const lang = props.code || props.lang || props.type || 'jsx'

  useEffect(() => {
    function expandCode() {
      if (maxHeightVal) return
      maxHeightVal = getComputedStyle(ref.current).getPropertyValue('max-height')
      ref.current.style.maxHeight = 'none'
    }

    ref.current.addEventListener('click', expandCode)
    return () => {
      ref?.current?.removeEventListener('click', expandCode)
    }
  }, [])

  useEffect(() => {
    function shrinkCode(e) {
      // do not shrink if clicked on any other code blocks, otherwise annoying jumps may happen
      const preEls = document.querySelectorAll('pre')
      const arrWithPreEls = [...preEls]
      const clickedEl = e.target
      if (arrWithPreEls.some(preEl => preEl.contains(clickedEl))) return

      if (!maxHeightVal) return
      ref.current.style.maxHeight = maxHeightVal
      maxHeightVal = null
    }

    document.addEventListener('click', shrinkCode)
    return () => {
      document.removeEventListener('click', shrinkCode)
    }
  }, [])

  return (
    <pre ref={ref} style={{ margin: '20px 0px' }}>
      <code className={`language-${lang}`}>
        {props.children}
      </code>
    </pre>
  )
}
