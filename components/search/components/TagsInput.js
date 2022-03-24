
export function TagsInput() {

  return (
    <div>
      <input
        type="search"
        placeholder={'Filter tags'}
        value={"tag"}
        onChange={e => {

        }}
      />

      <style jsx>{`
        div {
          text-align: center;
        }
        input {
          max-width: 300px;
          margin-bottom: 5px;
          padding: 5px;
          border-width: 1px;
          border-color: #c0c0c0;
          border-style: solid;
          border-radius: 4px;
          outline-style: none;
          min-width: 0;
          cursor: text;
          height: 35px;
          /* against Safari */
          -webkit-appearance: none; 
        }
        input:hover {
          border-color: grey;
          transition: border-color 200ms ease;
        }

        input:focus {
          border-color: rgba(0, 157, 214, 1);
        }

        input::-webkit-search-cancel-button {
          cursor: pointer;
        }
      `}</style>

    </div>


  )
}

const InputStyled = styled.div`
  text-align: center;

  input {
    max-width: 300px;
    margin-bottom: 5px;
    padding: 5px;
    border-width: 1px;
    border-color: #c0c0c0;
    border-style: solid;
    border-radius: 4px;
    outline-style: none;
    min-width: 0;
    cursor: text;
    height: 35px;
    /* against Safari */
    -webkit-appearance: none; 

    input:hover {
      border-color: grey;
      transition: border-color 200ms ease;
    }

    input:focus {
      border-color: rgba(0, 157, 214, 1);
    }

    input::-webkit-search-cancel-button {
      cursor: pointer;
    }
  }
`
