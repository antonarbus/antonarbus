import styled from 'styled-components'

export function Date(props) {
  return <time>
    {props.children}

    <style jsx>{`
      time {
        font-size: 10px;
        position: absolute;
        bottom: 7px;
        right: 7px;
      }
    `}</style>

  </time>
}
