import styled from 'styled-components'

export function FoundPosts() {
  const foundPostsState = useSelector(state => state.foundPosts)
  const dispatch = useDispatch()

  if (foundPostsState.length === 0) {
    return <FoundPostsStyled>Not found</FoundPostsStyled>
  }

  const ending = foundPostsState.length !== 1 ? 's' : ''
  return (
    <FoundPostsStyled
      onClick={e => {
        e.preventDefault()
        dispatch({ type: 'close search menu' })
        dispatch({ type: 'remove tags input val' })
        dispatch({ type: 'show found posts msg' })
        dispatch({ type: 'show remove found posts msg' })
        dispatch({
          type: 'display following posts',
          postsToShow: store.getState().foundPosts,
        })
        dispatch({ type: 'show 5 pages' })
      }}
    >
      Show {ending ? 'all' : ''} {foundPostsState.length} post{ending}
    </FoundPostsStyled>
  )
}

const FoundPostsStyled = styled.span`
  position: absolute;
  top: 12px;
  right: 0px;
  left: 0px;
  color: grey;
  text-align: center;
  cursor: pointer;
  transform: translateX(-50%);
  left: 50%;

  &:hover {
    color: #1c1c1c;
  }
`
