import styled from 'styled-components'

export function Num(props) {
  return (
    <span>
      Post #{props.num}
      {props.children}
      
      <style jsx global>{`
        .class {
          position: absolute;
          color: #b0b0b0;
          top: -26px;
          right: 5px;
        }
      `}</style>
    </span>
  )


}

