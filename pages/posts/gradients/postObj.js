import { styled, Code, CodeSpan, H3, H5, LazyImg, Lnk } from '/pages/posts/reExport'

const style = { height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }

function Cmpt1() {
  return <Div1 style={style}>linear-gradient(red, green)</Div1>
}
const Div1 = styled.div`
  background: linear-gradient(red, green);
`

function Cmpt2() {
  return <Div2 style={style}>linear-gradient(to top right, red, green)</Div2>
}
const Div2 = styled.div`
  background: linear-gradient(to top right, red, green);
`

function Cmpt3() {
  return <Div3 style={style}>linear-gradient(0deg, red, green)</Div3>
}
const Div3 = styled.div`
  background: linear-gradient(0deg, red, green);
`

function Cmpt4() {
  return <Div4 style={style}>linear-gradient(45deg, red, green)</Div4>
}
const Div4 = styled.div`
  background: linear-gradient(45deg, red, green);
`

function Cmpt5() {
  return <Div5 style={style}>linear-gradient(red, white, green)</Div5>
}
const Div5 = styled.div`
  background: linear-gradient(red, white, green);
`

function Cmpt6() {
  return <Div6 style={style}>linear-gradient(to right, red 0%, white 10%, green 50%)</Div6>
}
const Div6 = styled.div`
  background: linear-gradient(to right, red 0%, white 10%, green 50%);
`

function Cmpt7() {
  return <Div7 style={style}>linear-gradient(red, green);</Div7>
}
const Div7 = styled.div`
  height: 600px !important;
  background: linear-gradient(red, green);
`

function Cmpt8() {
  return <Div8 style={style}>linear-gradient(red, green); background-attachment: fixed;</Div8>
}
const Div8 = styled.div`
  height: 600px !important;
  background: linear-gradient(red, green);
  background-attachment: fixed;
`

export const postObj = {
  title: 'Gradients',
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

      <Cmpt1 />

      <p>We can specify the direction of the gradient line.</p>

      <Code lang="css">{`
      background: linear-gradient(to top right, red, green)
      `}</Code>

      <Cmpt2 />

      <p>Or use an angle.</p>

      <LazyImg path="/imgs/linearGradient.png" />

      <p> Line goes through the center of the box. The colors of the gradient are determined by several points. Start & end points are defined by the intersection the line with a perpendiculars from the box corners. Start & end points are symmetrical from center. </p>

      <Code lang="css">{`
      background: linear-gradient(0deg, red, green)
      `}</Code>

      <p> Or use an angle. Note that as far as the div shape is not square, the line doesn't go diagonally. </p>

      <Cmpt3 />

      <p> Or use an angle. Note that as far as the div shape is not square, the line doesn't go diagonally. </p>

      <Code lang="css">{`
      background: linear-gradient(45deg, red, green)
      `}</Code>

      <Cmpt4 />

      <p>We can have multiple comma separated colors.</p>

      <Code lang="css">{`
      background: linear-gradient(red, white, green)
      `}</Code>

      <Cmpt5 />

      <p>You can set a start point for a color.</p>

      <Code lang="css">{`
      background: linear-gradient(to right, red 0%, white 10%, green 50%);
      `}</Code>

      <Cmpt6 />

      <p> Background image can span across the whole container or can be fixed. Check the difference. </p>

      <Cmpt7 />
      <br />
      <Cmpt8 />
    </>
  ),
}
