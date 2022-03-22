import styled from 'styled-components'
import { Tag } from './Tag'

export function Tags(props) {
  const { tags } = props
  return (
    <div className='tags'>
      {tags.map(tag => (
        <Tag tag={tag} key={tag} />
      ))}

      <style jsx>{`
        .tags {
          margin-top: 20px; 
        }
      `}</style>
    </div>
  )
}
