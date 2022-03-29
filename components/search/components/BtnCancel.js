import { useContext } from 'react'
import { PostsContext } from '/pages/posts/index'

export function BtnCancel() {
  const { setItemsInInput, inputRef, setFoundPostsState, posts, setInputValState, btnCancelRef } =
    useContext(PostsContext)

  function removeInputContent(e) {
    setInputValState('')
    setItemsInInput([])
    inputRef.current.focus()
    setFoundPostsState(posts)
  }

  return (
    <>
      <button onClick={removeInputContent} ref={btnCancelRef} />

      <style jsx>{`
        button {
          border: none;
          width: 32px;
          height: 32px;
          background-color: transparent;
          cursor: pointer;
          flex-shrink: 0;
        }
        button:before,
        button:after {
          content: ' ';
          position: absolute;
          height: 20px;
          width: 4px;
          background-color: #dcdcdc5c;
        }
        button:hover:before,
        button:hover:after {
          background-color: #ff6565bd;
        }
        button::before {
          transform: translate(-50%, -50%) rotate(45deg);
        }
        button::after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      `}</style>
    </>
  )
}
