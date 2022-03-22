import styled from 'styled-components'
import LazyLoad from 'react-lazyload' // https://www.npmjs.com/package/react-lazyload

export function LazyImg(props) {
  return (
    <LazyLoad placeholder={<div>Loading...</div>} ones>
      <img
        src={props.src || props.path || props.link}
        height={props.height || 'auto'}
        width={props.width || 'auto'}
      />

      <style jsx>{`
        img {
          box-shadow: #898989a3 0px 0px 7px 0px;
          margin: 0 auto;
          border-radius: 4px;
          margin-top: 10px;
          margin-bottom: 10px;
          display: block;
          max-width: 100%;
        }
      `}</style>
    </LazyLoad>
  )
}
