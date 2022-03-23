import styled from 'styled-components'
import { postsArr } from '../../PostsFeed/postsArr'

export function RemoveFoundPosts() {
  const dispatch = useDispatch()
  const postsOnDisplayState = useSelector(state => state.postsOnDisplay)
  const postsNum = postsOnDisplayState.length

  if (postsNum === postsArr.length) return null

  return (
    <DivStyled>
      <span>
        {!!postsNum && postsNum}
        {!!postsNum && postsNum && ' post'}
        {!!postsNum && (postsNum > 1 ? 's are ' : ' is ')}
        {!postsNum && 'Not '}
        found
      </span>
      <span
        onClick={e => {
          e.preventDefault()
          dispatch({ type: 'remove search input val' })
          dispatch({ type: 'display following posts', postsToShow: postsArr })
          dispatch({ type: 'close search menu' })
          dispatch({ type: 'remove remove found posts msg' })
          dispatch({ type: 'remove tags input val' })
          dispatch({ type: 'forget tags from input' })
          dispatch({ type: 'forget words from input' })
          dispatch({ type: 'reset posts' })
          dispatch({ type: 'get tags from all posts' })
          dispatch({ type: 'show 5 pages' })
          document.querySelector('#input').innerHTML = ''
          window.history.pushState({}, null, '/')
        }}
      >
        ⨉
      </span>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  text-align: center;
  margin-top: 15px;
  position: absolute;
  top: 30px;
  width: 100%;

  & span:first-child {
    color: rgba(255 255 255 / 60%);
  }

  & span:last-child {
    color: #f99191;
    font-size: 20px;
    font-weight: 900;
    margin-left: 10px;
    cursor: pointer;

    &:hover {
      color: #f75151;
    }
  }
`
