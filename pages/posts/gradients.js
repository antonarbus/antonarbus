import { Code, CodeSpan, LazyImg } from '../../components/post/reExport';
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />;
}

const style = { height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }

function Cmpt(props) {
  return (
    <div style={style}>
      {props.css}
      <style jsx>{`
        div {
          ${props.css}
        }
      `}</style>
    </div>
  )
}

export const postObj = {
  title: 'gradients',
  date: '2021.11.18',
  tags: ['CSS'],
  description: 'Gradients in CSS',
  body: (
    <>
      <ul>
        <p>We will speak only about linear gradient here, but there are more:</p>
        <li>Linear gradient (goes down/up/left/right/diagonally)</li>
        <li>Radial gradient (defined by their center)</li>
        <li>Conic gradient (rotated around a center point)</li>
      </ul>

      <p>Gradient is an image, not a color. </p>

      <p> We can assign it to <CodeSpan code="css">background-image: linear-gradient(red, green)</CodeSpan>. </p>

      <p> CSS is smart enough to understand if you declare gradient to a shorthand <CodeSpan code="css">background: linear-gradient(red, green)</CodeSpan>. </p>

      <p>By default the gradient line goes from the top to the bottom. Prev. example looks like.</p>

      <Code lang="css">{`
      background: linear-gradient(red, green)
      `}</Code>

      <Cmpt css='background: linear-gradient(red, green)'></Cmpt>

      <p>We can specify the direction of the gradient line.</p>

      <Code lang="css">{`
      background: linear-gradient(to top right, red, green)
      `}</Code>

      <Cmpt css='background: linear-gradient(to top right, red, green)'></Cmpt>

      <p>Or use an angle.</p>

      <LazyImg path="/imgs/linearGradient.png" />

      <p> Line goes through the center of the box. The colors of the gradient are determined by several points. Start & end points are defined by the intersection the line with a perpendiculars from the box corners. Start & end points are symmetrical from center. </p>

      <Code lang="css">{`
      background: linear-gradient(0deg, red, green)
      `}</Code>

      <p> Or use an angle. Note that as far as the div shape is not square, the line doesn't go diagonally. </p>

      <Cmpt css='background: linear-gradient(0deg, red, green)' />

      <p> Or use an angle. Note that as far as the div shape is not square, the line doesn't go diagonally. </p>

      <Code lang="css">{`
      background: linear-gradient(45deg, red, green)
      `}</Code>

      <Cmpt css='background: linear-gradient(45deg, red, green)' />

      <p>We can have multiple comma separated colors.</p>

      <Code lang="css">{`
      background: linear-gradient(red, white, green)
      `}</Code>

      <Cmpt css='background: linear-gradient(red, white, green)' />

      <p>You can set a start point for a color.</p>

      <Code lang="css">{`
      background: linear-gradient(to right, red 0%, white 10%, green 50%);
      `}</Code>

      <Cmpt css='background: linear-gradient(to right, red 0%, white 10%, green 50%)' />

      <p> Background image can span across the whole container or can be fixed. Check the difference. </p>

      <Cmpt css='height: 600px !important; background: linear-gradient(red, green);' />
      <br />
      <Cmpt css='height: 600px !important; background: linear-gradient(red, green); background-attachment: fixed;' />
    </>
  ),
}