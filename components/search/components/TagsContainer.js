import styled from 'styled-components'
import isIos from '../../../helpers/functions/isIos'
import { Tag } from '../../PostsFeed/components/Tag'
import { InputTagsSearch } from './InputTagsSearch'

export function TagsContainer() {
  const filteredTagsState = useSelector(state => state.filteredTags)
  const foundPostsState = useSelector(state => state.foundPosts)

  return (
    <>
      {!!foundPostsState.length && (
        <TagsContainerStyled isIos={isIos()}>
          <InputTagsSearch />
          {filteredTagsState.map(tag => (
            <Tag tag={tag} key={tag}>
              {tag}
            </Tag>
          ))}
        </TagsContainerStyled>
      )}
    </>
  )
}

const TagsContainerStyled = styled.div`
  background: #e8e8e8;
  margin: 10px 0px;
  border-radius: 4px;
  overflow-y: auto;
  max-height:  ${props => props.isIos ? '144px' : '143px'};
  height: auto;
  padding: 7px;
  padding-bottom: 3px;
`
