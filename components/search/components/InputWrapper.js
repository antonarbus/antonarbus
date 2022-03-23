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
          border: 1px solid red;
          
          width: 100%;
          height: 40px;
          border-radius: 4px;

          border-width: 1px;
          border-style: solid;
          border-color: rgb(82 168 236/ 80%);
          box-shadow: 0 1px 1px rgb(0 0 0 / 8%), 0px 1px 5px rgb(82 168 236 / 60%) inset;
          margin: 0px;
          outline: 0;

          overflow: auto;

          
        }
      `}</style>
    </div>
  )
}
