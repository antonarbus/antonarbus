import { useState, Code, H5 } from '../../components/post/reExport';
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />;
}

function Cmpt() {
  const [blurState, SETblurState] = useState(0)
  const [brightnessState, SETbrightnessState] = useState(100)
  const [contrastState, SETcontrastState] = useState(100)

  return (
    <>
      <div className='container'>
        <div className='box'> Hello </div>
      </div>
      <div className='css'>
        <div>{'.box {'}</div>

        <div style={{ marginLeft: '20px' }}>
          <div>backdrop-filter:</div>
          <div style={{ marginLeft: '20px' }}>
            <div>
              blur(
              <input type="number" onChange={e => SETblurState( e.target.value ) } value={blurState} />
              px)
            </div>

            <div>
              brightness(
              <input type="number" onChange={e => SETbrightnessState( e.target.value ) } value={brightnessState} />
              %)
            </div>

            <div>
              contrast(
              <input type="number" onChange={e => SETcontrastState( e.target.value ) } value={contrastState} />
              %)
            </div>
          </div>
        </div>

        <div>{'}'}</div>
      </div>
      <style jsx>{`
        .container { 
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 30vh;
          background-image: url(/imgs/keyboard.jpeg);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 50%;
          background-color: rgb(255 255 255 / 50%);
          backdrop-filter:
            blur(${blurState}px)
            brightness(${brightnessState}%)
            contrast(${contrastState}%)
        }
        .css {
          background-color: rgb(0 0 0 / 5%);
          margin-top: 10px;
        }
        .css input[type='checkbox'] {
          margin-right: 10px;
          cursor: pointer;
        }
        .css input[type='number'],
        .css input[type='text'] {
          border: 0px solid grey;
          box-shadow: inset 0px 0px 2px #000000;
          outline: none;
          max-width: 50px;
          margin: 0px 5px;
          background-color: white;
          padding: 5px;
          border-radius: 4px;
        }
      `}</style>
    </>
  )
}

export const postObj = {
  title: 'backdrop-filter',
  date: '2021.12.10',
  tags: ['CSS', 'property'],
  description: 'backdrop-filter property in CSS',
  body: (
    <>
      <p> <code>backdrop-filter</code> CSS property applies effects to the area behind an element. </p>
      <p> That's nice to make a semi-transparent layer and blur anything behind. </p>
      <Cmpt />

      <H5>All CSS properties</H5>

      <Code lang='css'>{`
      /* Keyword value */
      backdrop-filter: none;

      /* URL to SVG filter */
      backdrop-filter: url(commonfilters.svg#filter);

      /* <filter-function> values */
      backdrop-filter: blur(2px);
      backdrop-filter: brightness(60%);
      backdrop-filter: contrast(40%);
      backdrop-filter: drop-shadow(4px 4px 10px blue);
      backdrop-filter: grayscale(30%);
      backdrop-filter: hue-rotate(120deg);
      backdrop-filter: invert(70%);
      backdrop-filter: opacity(20%);
      backdrop-filter: sepia(90%);
      backdrop-filter: saturate(80%);

      /* Multiple filters */
      backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

      /* Global values */
      backdrop-filter: inherit;
      backdrop-filter: initial;
      backdrop-filter: revert;
      backdrop-filter: unset;
      `}</Code>
    </>
  ),
}
