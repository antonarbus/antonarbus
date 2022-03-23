export function BtnSearch() {

  return (
    <button>
      Search

      <style jsx>{`
        button {
          font-size: 20px;
          border-radius: 4px;
          border-width: 1px;
          outline-style: none;
          border-style: solid;
          border-color: #c0c0c0;
          width: auto;
          height: 40px;
          padding: 0px 10px;
          margin-left: 10px;
          cursor: pointer;
          background-color: transparent;
          background-image: linear-gradient(to right bottom,rgb(255 255 255 / 85%),rgb(255 255 255 / 95%));
        }
        button:hover,
        button:focus {
          border-color: grey;
          transition: border-color 200ms ease;
        }
      `}</style>
    </button>
  )
}

