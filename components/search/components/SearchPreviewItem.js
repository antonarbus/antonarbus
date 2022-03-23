import styled from 'styled-components'
import { Link } from 'react-router-dom'

export function SearchPreviewItem(props) {
  const dispatch = useDispatch()

  return (
    <Link style={{ textDecoration: 'none' }}
      to={`/post/${props.uriPostName}`}
      onClick={() => {
        dispatch({ type: 'close search menu' })
      }}
    >
      <SearchPreviewStyled className="post-preview">
        <h4>{props.title}</h4>
        <summary>{props.summary}</summary>
      </SearchPreviewStyled>
    </Link>
  )
}

const SearchPreviewStyled = styled.div`
  background-color: #e8e8e8;
  margin: 10px 0px;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px;
  max-height: 106px;
  overflow-y: auto;

  &:hover {
    background-color: lightgrey;
  }

  h4 {
    margin: 5px 0px;
    color: #0083bf;
  }

  summary {
    color: #3f3f3f;
    font-size: 14px;
  }
`
