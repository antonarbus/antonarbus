import { Tag } from "./Tag"
import { TagsInput } from "./TagsInput"

export function TagsContainer() {

  return (
    <>
      
        <div className='tagsContainer' >
          <TagsInput />
          <Tag tag='tag1' />
          <Tag tag='tag2' />
          <Tag tag='tag3' />
        </div>

        <style jsx>{`
          .tagsContainer {
            background: #e8e8e8;
            margin: 10px 0px;
            border-radius: 4px;
            overflow-y: auto;
            max-height:  ${props => props.isIos ? '144px' : '143px'};
            height: auto;
            padding: 7px;
            padding-bottom: 3px;
          }
        `}</style>

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
