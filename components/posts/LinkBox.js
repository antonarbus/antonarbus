export function LinkBox(props) {
  return (
    <div>
      {props.children}

      <style jsx>{`
        div {
          display: inline-block;
          border-radius: 4px;
          padding: 5px;
          margin: 5px;
          position: relative;
          border: 1px solid rgb(199, 199, 199);
          box-shadow: #80808073 0px 0px 10px;
        }
      `}</style>

    </div>
  )
}
