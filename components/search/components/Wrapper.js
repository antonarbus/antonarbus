export function Wrapper(props) {
  return (
    <div>
      {props.children}
      
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid grey;
          padding: 5px;
          min-width: 100%;
          height: 60px;
          border-radius: 4px;
          
        }
      `}</style>
    </div>
  )
}
