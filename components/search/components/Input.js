export function Input(props) {

  return (
    <>
      <input placeholder='Search'/>
      
      <style jsx>{`
        input {
          font-size: 20px;
          border: 0px solid grey;
          background: transparent;
          /* border-radius: 4px; */
          outline-style: none;
          width: 100%;
          padding: 5px;
          height: 100%;
          margin-left: 2px;
          min-width: 100px;
        }
        input::placeholder {
          font-family: "Segoe UI";
          font-weight: 100;
        }
      `}</style>
    </>
  )
}
