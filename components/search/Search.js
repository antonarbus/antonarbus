import Mark from 'mark.js'
import React, { useEffect, createContext, useContext, useRef, useState, useCallback } from 'react'
import { BtnCancel } from './components/BtnCancel'
import { BtnSearch } from './components/BtnSearch'
import { Input } from './components/Input'
import { InputWrapper } from './components/InputWrapper'
import { Wrapper } from './components/Wrapper'
import { Tag } from './components/Tag'


// import { BtnCancel } from './components/BtnCancel'
// import { BtnSearch } from './components/BtnSearch'
// import { FoundPosts } from './components/FoundPosts'
// import { RemoveFoundPosts } from './components/RemoveFoundPosts'
// import { SearchPreviewContainer } from './components/SearchPreviewContainer'
// import { SearchPreviewItem } from './components/SearchPreviewItem'
// import { TagsContainer } from './components/TagsContainer'

export default function Search() {

  const [showSearchMenu, setShowSearchMenu] = useState(false)
  const [showRemoveFoundPostsMsg, setShowRemoveFoundPostsMsg] = useState(false)
  const [searchInputVal, setSearchInputVal] = useState('')
  const [foundPosts, setFoundPosts] = useState([])
  const [typedWords, setTypedWords] = useState([])

  function highlightTextInPreview(words) {
    const context = document.querySelectorAll('.post-preview')
    const instance = new Mark(context)
    instance.unmark()
    instance.mark(words)
  }

  useEffect(() => { highlightTextInPreview(typedWords) })

  const ref = useRef()

  function closeSearchPreview() {
    // dispatch({ type: 'close search menu' })
    // dispatch({ type: 'remove tags input val' })
  }
  const closeSearchPreviewMemo = useCallback(closeSearchPreview, [/* dispatch */])

  useEffect(() => {
    function closeModalOnEscape(e) {
      if (e.key === 'Escape') closeSearchPreviewMemo()
    }

    function isClickedElOutsideThisEl(clickedEl, thisEl) {
      return !thisEl.contains(clickedEl)
    }

    function closeModalOnClickOutside(e) {
      const modalWindow = ref.current
      const clickedEl = e.target
      if (!modalWindow) return
      if (isClickedElOutsideThisEl(clickedEl, modalWindow)) closeSearchPreviewMemo()
    }

    document.addEventListener('mousedown', closeModalOnClickOutside)
    document.addEventListener('keydown', closeModalOnEscape)

    return () => {
      document.removeEventListener('mousedown', closeModalOnClickOutside)
      document.removeEventListener('keydown', closeModalOnEscape)
    }

    // document.addEventListener('click', closeSearchPreviewMemo);
    // return () => document.removeEventListener('click', closeSearchPreviewMemo)
  }, [closeSearchPreviewMemo])

  return (
    <div className='container'
      // do not close dropdown search menu if clicked inside
      // onClick={e => e.stopPropagation()}
      ref={ref}
    >
      <Wrapper>
        <InputWrapper>
          <Tag tag='tagппппп' />
          <Tag tag='tag' />
          <Tag tag='tag' />

          <Input />
          <BtnCancel />
        </InputWrapper>
        <BtnSearch />
      </Wrapper>

      <style jsx>{`
        .container {
          display: inline-flex;
          justify-content: space-between;
          align-items: stretch;
          margin: 0 auto;
          width: 90vw;
          margin-top: 30px;
          height: 40px;
          max-width: 550px;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }
      `}</style>
    </div>
  )
}
