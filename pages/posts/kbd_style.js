import { Code } from '/components/post/reExport'; 
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />
}

function Kbd(props) {
  return (
    <kbd>
      {props.children}

      <style jsx>{`
        kbd {
          margin: 0px 0.1em;
          padding: 0.1em 0.6em;
          border-radius: 3px;
          border: 1px solid rgb(204, 204, 204);
          color: rgb(51, 51, 51);
          line-height: 1.4;
          font-family: Arial, Helvetica, sans-serif;
          display: inline-block;
          box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2), inset 0px 0px 0px 2px #ffffff;
          background-color: rgb(247, 247, 247);
          text-shadow: 0 1px 0 #fff;
          font-size: 12px;
        }
      `}</style>
    </kbd>
  )
}

export const postObj = {
  title: 'kbd style',
  date: '2021.10.29',
  tags: ['CSS'],
  description: 'kbd CSS style',
  body: <>
    <Kbd>Esc</Kbd><Kbd>F4</Kbd><Kbd>Alt</Kbd><Kbd>Ctrl</Kbd><Kbd>Tab</Kbd>

    <Code lang='css'>{`
    kbd {
      margin: 0px 0.1em;
      padding: 0.1em 0.6em;
      border-radius: 3px;
      border: 1px solid rgb(204, 204, 204);
      color: rgb(51, 51, 51);
      line-height: 1.4;
      font-family: Arial, Helvetica, sans-serif;
      display: inline-block;
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2), inset 0px 0px 0px 2px #ffffff;
      background-color: rgb(247, 247, 247);
      text-shadow: 0 1px 0 #fff;
      font-size: 12px;
    }
    `}</Code>
  </>,
}
