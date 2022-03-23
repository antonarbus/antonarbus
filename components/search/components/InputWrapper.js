export function InputWrapper(props) {
  return (
    <div>
      {props.children}
      
      <style jsx>{`
        div {
          display: flex;
          flex-wrap: nowrap;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          height: 40px;
          border-radius: 4px;
          border-width: 1px;
          border-style: solid;
          border-color: grey;
          margin: 0px;
          outline: 0;
          overflow: auto;
        }
      `}</style>
    </div>
  )
}
