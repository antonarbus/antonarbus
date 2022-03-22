import { Code } from '../../components/post/reExport';
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />;
}

const divStyle = `
  background-image: url('/imgs/headphones.jpg');
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  color: black;
  margin: 10px;
  border: 2px solid grey;
  height: 200px;
`


export const postObj = {
  title: 'Dim background image',
  date: '2021.11.19',
  tags: ['CSS'],
  description: 'Put some dimming on top of an image with CSS',
  body: (
    <>
      <p>Several background images separated by comma can be applied.</p>
      <p>
        There is a CSS trick how we can dim an image putting a bit transparent gradient without
        gradient in front.
      </p>

      <div>
        <style jsx>{`
          div {
            ${divStyle}
          }
        `}</style>
      </div>

      <code>
        background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
        url('/imgs/headphones.jpg')
      </code>

      <div>
        <style jsx>{`
          div {
            ${divStyle}
            background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/imgs/headphones.jpg');
          }
        `}</style>
      </div>

      <Code>{`
      const Div1 = styled.div\`
        background-image: url('/imgs/headphones.jpg');
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        color: black;
        margin: 10px;
        border: 2px solid grey;
        height: 200px;
      \`

      const Div2 = styled(Div1)\`
        background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/imgs/headphones.jpg');
      \`
      `}</Code>
    </>
  ),
}