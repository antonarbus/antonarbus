
// import setCaretToEnd from '/functions/setCaretToEnd'
// import { useDispatch } from 'react-redux'
// import { store } from '../../../App'


export function TagInsideInput(props) {
  // const dispatch = useDispatch()

  function clickHandler(e) {
    alert('delete tag')
    // e.stopPropagation()
    // // add tag to search input
    // const inputEl = document.getElementById('input')
    // const tagEl = e.target
    // const clonedTag = tagEl.cloneNode(true)
    // clonedTag.classList.add('tag')
    // inputEl.appendChild(clonedTag)
    // inputEl.append('\u00A0')
    // setCaretToEnd(inputEl)
    // inputEl.scrollLeft = 10000
    // window.scroll({ top: 0, left: 0, behavior: 'smooth' })

    // dispatch({
    //   type: 'remove tags input val',
    //   foundPosts: store.getState().foundPosts,
    // })

    // dispatch({
    //   type: 'filter tags',
    //   tagsInputVal: store.getState().tagsInputVal,
    //   tagsFromFoundPosts: store.getState().tagsFromFoundPosts,
    // })
  }

  return (
    <div className='tag' onClick={clickHandler}>
      <span className='tagText'>{props.tag}</span>
      <span className='deleteTag'></span>
      
      <style jsx>{`
        .tag { 
          display: inline-block;
          position: relative;
          padding: 2px 5px ;
          margin-left: 5px;
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
          content: '✕';
          position: absolute;
          top: 50%; 
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
          color: rgb(251, 122, 122);
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