import styled from 'styled-components'
// if we do not provide any link specifically via 'link' or 'path or url' or 'src' it will be taken from the tag content (props.children)

export function Lnk(props) {
  return (
    <a
      href={props.link || props.path || props.url || props.src || props.children}
      target="_blank"
      rel="noreferrer"
    >
      {props.text}
      {props.children}

      <style jsx>{`
        a {
          color: #0098f7;
        }
      `}</style>
    </a>
  )
}
