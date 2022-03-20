import { styled, Code, CodeSpan, H3, H5, LazyImg, Lnk, React, useEffect, useState, useRef } from '/pages/posts/reExport'

function Cmpt() {
  const [blurState, SETblurState] = useState({ checked: true, cssVal: 4 })
  const [brightnessState, SETbrightnessState] = useState({ checked: false, cssVal: 160 })
  const [contrastState, SETcontrastState] = useState({ checked: false, cssVal: 400 })
  const [dropShadowState, SETdropShadowState] = useState({ checked: false, cssVal: '10px 10px 10px black' })
  const [grayscaleState, SETgrayscaleState] = useState({ checked: false, cssVal: 90 })
  const [hueRotateState, SEThueRotateState] = useState({ checked: false, cssVal: 120 })
  const [invertState, SETinvertState] = useState({ checked: false, cssVal: 70 })
  const [opacityState, SETopacityState] = useState({ checked: false, cssVal: 20 })
  const [sepiaState, SETsepiaState] = useState({ checked: false, cssVal: 90 })
  const [saturateState, SETsaturateState] = useState({ checked: false, cssVal: 80 })

  return (
    <>
      <Container>
        <Box
          blurState={blurState}
          brightnessState={brightnessState}
          contrastState={contrastState}
          dropShadowState={dropShadowState}
          grayscaleState={grayscaleState}
          hueRotateState={hueRotateState}
          invertState={invertState}
          opacityState={opacityState}
          sepiaState={sepiaState}
          saturateState={saturateState}
        >
          Hello
        </Box>
      </Container>
      <CSS>
        <div>{'.box {'}</div>

        <div style={{ marginLeft: '20px' }}>
          <div>backdrop-filter:</div>
          <div style={{ marginLeft: '20px' }}>
            <div>
              <input type="checkbox" checked={blurState.checked} onChange={() => SETblurState({ ...blurState, checked: !blurState.checked }) } />
              blur(
              <input type="number" onChange={e => SETblurState({ ...blurState, cssVal: e.target.value }) } value={blurState.cssVal} />
              px)
            </div>

            <div>
              <input type="checkbox" checked={brightnessState.checked} onChange={() => SETbrightnessState({ ...brightnessState, checked: !brightnessState.checked }) } />
              brightness(
              <input type="number" onChange={e => SETbrightnessState({ ...brightnessState, cssVal: e.target.value }) } value={brightnessState.cssVal} />
              %)
            </div>

            <div>
              <input type="checkbox" checked={contrastState.checked} onChange={() => SETcontrastState({ ...contrastState, checked: !contrastState.checked }) } />
              contrast(
              <input type="number" onChange={e => SETcontrastState({ ...contrastState, cssVal: e.target.value }) } value={contrastState.cssVal} />
              %)
            </div>

            <div>
              <input type="checkbox" checked={dropShadowState.checked} onChange={() => SETdropShadowState({ ...dropShadowState, checked: !dropShadowState.checked }) } />
              drop-shadow(
              <input type="text" onChange={e => SETdropShadowState({ ...dropShadowState, cssVal: e.target.value }) } value={dropShadowState.cssVal} style={{ maxWidth: '150px' }} />
              )  <span style={{ color: 'red' }}>not working, no clue why</span>
            </div>

            <div>
              <input type="checkbox" checked={grayscaleState.checked} onChange={() => SETgrayscaleState({ ...grayscaleState, checked: !grayscaleState.checked }) } />
              grayscale(
              <input type="number" onChange={e => SETgrayscaleState({ ...grayscaleState, cssVal: e.target.value }) } value={grayscaleState.cssVal} />
              %)
            </div>

            <div>
              <input type="checkbox" checked={hueRotateState.checked} onChange={() => SEThueRotateState({ ...hueRotateState, checked: !hueRotateState.checked }) } />
              hue-rotate(
              <input type="number" onChange={e => SEThueRotateState({ ...hueRotateState, cssVal: e.target.value }) } value={hueRotateState.cssVal} />
              deg)
            </div>

            <div>
              <input type="checkbox" checked={invertState.checked} onChange={() => SETinvertState({ ...invertState, checked: !invertState.checked }) } />
              invert(
              <input type="number" onChange={e => SETinvertState({ ...invertState, cssVal: e.target.value }) } value={invertState.cssVal} />
              %)
            </div>

            <div>
              <input type="checkbox" checked={opacityState.checked} onChange={() => SETopacityState({ ...opacityState, checked: !opacityState.checked }) } />
              opacity(
              <input type="number" onChange={e => SETopacityState({ ...opacityState, cssVal: e.target.value }) } value={opacityState.cssVal} />
              %)
            </div>

            <div>
              <input type="checkbox" checked={sepiaState.checked} onChange={() => SETsepiaState({ ...sepiaState, checked: !sepiaState.checked }) } />
              sepia(
              <input type="number" onChange={e => SETsepiaState({ ...sepiaState, cssVal: e.target.value }) } value={sepiaState.cssVal} />
              %)
            </div>

            <div>
              <input type="checkbox" checked={saturateState.checked} onChange={() => SETsaturateState({ ...saturateState, checked: !saturateState.checked }) } />
              saturate(
              <input type="number" onChange={e => SETsaturateState({ ...saturateState, cssVal: e.target.value }) } value={saturateState.cssVal} />
              %)
            </div>
          </div>
        </div>

        <div>{'}'}</div>
      </CSS>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  background-image: url(/imgs/keyboard.jpeg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  background-color: rgb(255 255 255 / 50%);
  backdrop-filter:  
    ${props => props.blurState.checked ? 'blur(' + props.blurState.cssVal + 'px)' : ''}  
    ${props => props.brightnessState.checked ? 'brightness(' + props.brightnessState.cssVal + '%)' : ''}
    ${props => props.contrastState.checked ? 'contrast(' + props.contrastState.cssVal + '%)' : ''}
    ${props => props.dropShadowState.checked ? 'drop-shadow(' + props.dropShadowState.cssVal + ')' : ''}
    ${props => props.grayscaleState.checked ? 'grayscale(' + props.grayscaleState.cssVal + '%)' : ''}
    ${props => props.hueRotateState.checked ? 'hue-rotate(' + props.hueRotateState.cssVal + 'deg)' : ''}
    ${props => props.invertState.checked ? 'invert(' + props.invertState.cssVal + '%)' : ''}
    ${props => props.opacityState.checked ? 'opacity(' + props.opacityState.cssVal + '%)' : ''}
    ${props => props.sepiaState.checked ? 'sepia(' + props.sepiaState.cssVal + '%)' : ''}
    ${props => props.saturateState.checked ? 'saturate(' + props.saturateState.cssVal + '%)' : ''}
`

const CSS = styled.div`
  background-color: rgb(0 0 0 / 5%);
  margin-top: 10px;
  input[type='checkbox'] {
    margin-right: 10px;
    cursor: pointer;
  }
  input[type='number'],
  input[type='text'] {
    border: 0px solid grey;
    box-shadow: inset 0px 0px 2px #000000;
    outline: none;
    max-width: 50px;
    margin: 0px 5px;
    background-color: white;
    padding: 5px;
    border-radius: 4px;
  }
`

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
    </>
  ),
}
