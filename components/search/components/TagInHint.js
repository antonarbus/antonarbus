import { useContext } from 'react'
import { PostsContext } from '/pages/posts/index'

export function TagInHint(props) {
  const {
    setSearchValState,
    itemsInInput,
    setItemsInInput,
  } = useContext(PostsContext)

  function tagsForInput() {
    const isItemAlreadyIncluded = itemsInInput.some(item => item.tag === true && item.val === props.tag)
    if (isItemAlreadyIncluded) return
    const newTag = {val: props.tag, tag: true, text: false}
    setItemsInInput([...itemsInInput, newTag])
    setSearchValState('')
  }

  return (
    <div className='tag' onClick={tagsForInput}>
      <span className='tagText'>{props.tag}</span>
      <span className='deleteTag'></span>
      
      <style jsx>{`
        .tag { 
          display: inline-block;
          position: relative;
          padding: 2px 5px ;
          margin: 5px;
          border: 1px solid rgb(172, 171, 171);
          border-radius: 3px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          color: grey;
          font-size: 12px;
          font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
          vertical-align: middle;
          user-select: none;
        }
        .tag:after {
          display: none;
          content: 'add';
          position: absolute;
          top: 50%; 
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 10px;
        }
        .tag:hover.tag:after {
          display: block;
        }

        .tag:hover .tagText {
          visibility: hidden;
        }
      `}</style>
    </div>
  )
}