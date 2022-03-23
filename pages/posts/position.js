import { Code, CodeSpan, H3, useState } from '/components/post/reExport';
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />;
}

function Component() {
  const [styleState, setStyleState] = useState('position: static;')
  const updateStyles = () => setStyleState(e.target.value)

  return (
    <div className='container'>
      Styles for <span style={{ color: 'red' }}>red</span> element
      <RadioButtons setStyleState={setStyleState} />
      <textarea value={styleState} onChange={updateStyles}/>
      <div className='wrapper'>
        {Array(14).fill('').map((el, i) => <div className='box' key={i + 1}>{i + 1}</div>)}
        <div className='box boxSpecial'>14</div>
        {Array(100).fill('').map((el, i) => <div className='box' key={i + 1 + 14}>{i + 1 + 14}</div>)}
      </div>

      <style jsx>{`
        .container {
          text-align: center;
        }
        textarea {
          padding: 5px;
          width: 300px;
          height: 100px;
        }
        .wrapper {
          position: relative;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 400px;
          height: 280px;
          border: 1px solid grey;
          overflow: auto;
          margin: auto;
        }
        .box {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 30px;
          margin: 5px;
          background: rgb(35 35 35 / 50%);
        }
        .boxSpecial {
          background: rgb(255 0 0 / 50%);
          border: 1px solid green;
          ${styleState}
        }
      `}</style>
    </div>
  )
}

function RadioButtons({ setStyleState }) {
  return (
    <div className='wrapper'>
      <label>
        <input type="radio" name="position" value='static' defaultChecked onChange={() => setStyleState('position: static;')} />
        <span>static</span>
      </label>
      <label>
        <input type="radio" name="position" value='relative' onChange={() => setStyleState('position: relative; \ntop: 20px; \nleft: 20px;')} />
        <span>relative</span>
      </label>
      <label>
        <input type="radio" name="position" value='absolute' onChange={() => setStyleState('position: absolute; \ntop: 20px; \nleft: 20px; \n/* container has relative position */')} />
        <span>absolute</span>
      </label>
      <label>
        <input type="radio" name="position" value='fixed' onChange={() => setStyleState('position: fixed; \ntop: 20px; \nleft: 20px;')} />
        <span>fixed</span>
      </label>
      <label>
        <input type="radio" name="position" value='sticky' onChange={() => setStyleState('position: sticky; \ntop: 0; \n/* scroll down to stick */')} />
        <span>sticky</span>
      </label>

      <style jsx>{`
        .wrapper label {
          display: inline-block;
          margin-right: 10px;
          cursor: pointer;
        }
        .wrapper input {
          margin: 2px;
        }
        .wrapper span {
          position: relative;
          bottom: 1.8px;
        }
      `}</style>
    </div>
  )
}

export const postObj = {
  title: 'position',
  date: '2022.02.13',
  tags: ['CSS', 'basics'],
  description: 'Position property in CSS',
  body: (
    <>
      <p> Position property allows to move element from its native place. </p>

      <Component />
      
      <H3><CodeSpan lang="css">position: static</CodeSpan></H3>
      
      <p>Default value with normal CSS flow</p>
      
      <H3><CodeSpan lang="css">position: relative</CodeSpan></H3>
      
      <ul>
        <li>Moves element from its native place with <code>left/right/top/bottom</code> properties</li>
        <li>Can not use both <code>left</code> & <code>right</code>; <code>top</code> & <code>bottom</code></li>
        <li>Negative coordinates are allowed</li>
      </ul>
      
      <H3><CodeSpan lang="css">position: absolute</CodeSpan></H3>
      
      <ul>
        <li>Absolutely positioned element is removed from the flow and its place is taken by other elements</li>
        <li><code>top/bottom/left/right</code> count from nearest positioned parent (not static)</li>
        <li>If no positioned parent found, then element is positioned from the document</li>
        <li>Width fits the content</li>
        <li>Element becomes <CodeSpan lang="css">display: block</CodeSpan>, which overlays other blocks</li>
        <li><code>left/right</code>, <code>top/bottom</code> can be set together and element will be stretched</li>
      </ul>
      
      <H3><CodeSpan lang="css">position: fixed</CodeSpan></H3>
      
      <ul>
        <li>Same as <code>position: absolute</code>, but relative to window</li>
        <li>When window is scrolled, element stays in place</li>
        <li>Modal window can be achieved with <CodeSpan lang="css">position: fixed; left: 0; top: 0; width: 100%; height: 100%; z-index: 999;</CodeSpan></li>
      </ul>
      
      <H3><CodeSpan lang="css">position: sticky</CodeSpan></H3>
      
      <p> The top, right, bottom, and left properties determine the final location of positioned elements. </p>

    </>
  ),
}
