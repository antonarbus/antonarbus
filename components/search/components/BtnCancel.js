
import Mark from 'mark.js'

export function BtnCancel() {
  return (
    <>
      <button
        onClick={e => {
          // remove highlight
          // const context = document.querySelector('main')
          // const instance = new Mark(context)
          // instance.unmark()
        }}
      />

      <style jsx>{`
        button {
          border: none;
          width: 32px;
          height: 32px;
          background-color: transparent;
          cursor: pointer;
          flex-shrink: 0;
        }
        button:before,
        button:after {
          content: ' ';
          position: absolute;
          height: 20px;
          width: 4px;
          background-color: #dcdcdc5c;
        }
        button:hover:before,
        button:hover:after {
          background-color: #ff6565bd;
        }
        button::before {
          transform: translate(-50%, -50%) rotate(45deg);
        }
        button::after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      `}</style>
    </>
  )
}
