import useInput from '/functions/useInput'
import { styled, Code, CodeSpan, H3, H5, LazyImg, Lnk, React, useState, useEffect, useRef } from '/pages/posts/reExport'

function Cmpt() {
  const [childrenQty, bindChildrenQty] = useInput(10)
  const [rowGapInput, bindRowGapInput] = useInput(0)
  const [columnGapInput, bindColumnGapInput] = useInput(0)
  const [paddingParent, bindPaddingParent] = useInput(0)
  const [heightParent, bindHeightParent] = useInput(200)
  const [paddingChild, bindPaddingChild] = useInput(0)
  const [marginChild, bindMarginChild] = useInput(0)
  const [minWidthChild, bindMinWidthChild] = useInput(75)

  const [display, setDisplay] = useState('flex')
  const [flexDirection, setFlexDirection] = useState('row')
  const [flexWrap, setFlexWrap] = useState('wrap')
  const [justifyContent, setJustifyContent] = useState('center')
  const [alignItems, setAlignItems] = useState('center')
  const [alignContent, setAlignContent] = useState('normal')

  const [order, bindOrder] = useInput(0)
  const [flexBasis, bindFlexBasis] = useInput('auto')
  const [flexGrow, bindFlexGrow] = useInput(0)
  const [flexShrink, bindFlexShrink] = useInput(1)
  const [alignSelf, setAlignSelf] = useState('auto')

  const ref = useRef()
  useEffect(() => {
    ref.current.querySelector('div').style.order = order
    ref.current.querySelector('div').style.flexBasis = flexBasis
    ref.current.querySelector('div').style.flexGrow = flexGrow
    ref.current.querySelector('div').style.flexShrink = flexShrink
    ref.current.querySelector('div').style.alignSelf = alignSelf
  }, [order, flexBasis, flexGrow, flexShrink, alignSelf])

  const parentStyle = {
    border: '1px solid red',
    borderRadius: '6px',
    marginBottom: '10px',
    overflow: 'auto',
  }
  const parentCustomStyle = {
    display: display,
    flexDirection: flexDirection,
    flexWrap: flexWrap,
    justifyContent: justifyContent,
    alignItems: alignItems,
    alignContent: alignContent,
    rowGap: rowGapInput + 'px',
    columnGap: columnGapInput + 'px',
    padding: paddingParent + 'px',
    height: heightParent + 'px',
  }
  const childrenStyle = {
    border: '1px solid grey',
    borderRadius: '6px',
  }
  const containerChildrenStyle = {
    padding: paddingChild + 'px',
    margin: marginChild + 'px',
    minWidth: minWidthChild + 'px',
  }

  return (
    <Div>
      <div
        style={{ ...parentStyle, ...parentCustomStyle }}
        ref={ref}
        className="parent"
      >
        {parseInt(childrenQty) > 0 &&
          new Array(parseInt(childrenQty))
            .fill('', 0, parseInt(childrenQty))
            .map((el, i) => (
              <div
                key={i}
                contentEditable={true}
                suppressContentEditableWarning={true}
                style={{ ...childrenStyle, ...containerChildrenStyle }}
                className="child"
              >
                div{i + 1} <br /> editable
              </div>
            ))}
      </div>
      <div>
        Number of divs inside flex box{' '}
        <input
          type="number"
          min="1"
          max="100"
          {...bindChildrenQty}
          style={{ width: '50px' }}
        />
      </div>

      <div className="cssContainer">
        <div>{'.parent {'}</div>
        <div className="grid">
          <div>display:</div>
          <div>
            <label>
              <input
                type="radio"
                name="display"
                value={'flex'}
                checked={display === 'flex'}
                onChange={() => setDisplay('flex')}
              />
              flex
            </label>
            <label>
              <input
                type="radio"
                name="display"
                value={'block'}
                checked={display === 'block'}
                onChange={() => setDisplay('block')}
              />
              block
            </label>
          </div>

          <div>flex-direction:</div>
          <div>
            <label>
              <input
                type="radio"
                name="flexDirection"
                value={'row'}
                checked={flexDirection === 'row'}
                onChange={() => setFlexDirection('row')}
              />
              row
            </label>
            <label>
              <input
                type="radio"
                name="flexDirection"
                value={'row-reverse'}
                checked={flexDirection === 'row-reverse'}
                onChange={() => setFlexDirection('row-reverse')}
              />
              row-reverse
            </label>
            <label>
              <input
                type="radio"
                name="flexDirection"
                value={'column'}
                checked={flexDirection === 'column'}
                onChange={() => setFlexDirection('column')}
              />
              column
            </label>
            <label>
              <input
                type="radio"
                name="flexDirection"
                value={'column-reverse'}
                checked={flexDirection === 'column-reverse'}
                onChange={() => setFlexDirection('column-reverse')}
              />
              column-reverse
            </label>
          </div>

          <div>flex-wrap:</div>
          <div>
            <label>
              <input
                type="radio"
                name="flexWrap"
                value={'nowrap'}
                checked={flexWrap === 'nowrap'}
                onChange={() => setFlexWrap('nowrap')}
              />
              nowrap
            </label>
            <label>
              <input
                type="radio"
                name="flexWrap"
                value={'wrap'}
                checked={flexWrap === 'wrap'}
                onChange={() => setFlexWrap('wrap')}
              />
              wrap
            </label>
            <label>
              <input
                type="radio"
                name="flexWrap"
                value={'wrap-reverse'}
                checked={flexWrap === 'wrap-reverse'}
                onChange={() => setFlexWrap('wrap-reverse')}
              />
              wrap-reverse
            </label>
          </div>

          <div>justify-content:</div>
          <div>
            <label>
              <input
                type="radio"
                name="justifyContent"
                value={'flex-start'}
                checked={justifyContent === 'flex-start'}
                onChange={() => setJustifyContent('flex-start')}
              />
              flex-start
            </label>
            <label>
              <input
                type="radio"
                name="justifyContent"
                value={'flex-end'}
                checked={justifyContent === 'flex-end'}
                onChange={() => setJustifyContent('flex-end')}
              />
              flex-end
            </label>
            <label>
              <input
                type="radio"
                name="justifyContent"
                value={'center'}
                checked={justifyContent === 'center'}
                onChange={() => setJustifyContent('center')}
              />
              center
            </label>
            <label>
              <input
                type="radio"
                name="justifyContent"
                value={'space-between'}
                checked={justifyContent === 'space-between'}
                onChange={() => setJustifyContent('space-between')}
              />
              space-between
            </label>
            <label>
              <input
                type="radio"
                name="justifyContent"
                value={'space-around'}
                checked={justifyContent === 'space-around'}
                onChange={() => setJustifyContent('space-around')}
              />
              space-around
            </label>
            <label>
              <input
                type="radio"
                name="justifyContent"
                value={'space-evenly'}
                checked={justifyContent === 'space-evenly'}
                onChange={() => setJustifyContent('space-evenly')}
              />
              space-evenly
            </label>
          </div>

          <div>align-items:</div>
          <div>
            <label>
              <input
                type="radio"
                name="alignItems"
                value={'stretch'}
                checked={alignItems === 'stretch'}
                onChange={() => setAlignItems('stretch')}
              />
              stretch
            </label>
            <label>
              <input
                type="radio"
                name="alignItems"
                value={'flex-start'}
                checked={alignItems === 'flex-start'}
                onChange={() => setAlignItems('flex-start')}
              />
              flex-start
            </label>
            <label>
              <input
                type="radio"
                name="alignItems"
                value={'flex-end'}
                checked={alignItems === 'flex-end'}
                onChange={() => setAlignItems('flex-end')}
              />
              flex-end
            </label>
            <label>
              <input
                type="radio"
                name="alignItems"
                value={'center'}
                checked={alignItems === 'center'}
                onChange={() => setAlignItems('center')}
              />
              center
            </label>
            <label>
              <input
                type="radio"
                name="alignItems"
                value={'baseline'}
                checked={alignItems === 'baseline'}
                onChange={() => setAlignItems('baseline')}
              />
              baseline
            </label>
          </div>

          <div>align-content:</div>
          <div>
            <label>
              <input
                type="radio"
                name="alignContent"
                value={'normal'}
                checked={alignContent === 'normal'}
                onChange={() => setAlignContent('normal')}
              />
              normal
            </label>
            <label>
              <input
                type="radio"
                name="alignContent"
                value={'flex-start'}
                checked={alignContent === 'flex-start'}
                onChange={() => setAlignContent('flex-start')}
              />
              flex-start
            </label>
            <label>
              <input
                type="radio"
                name="alignContent"
                value={'flex-end'}
                checked={alignContent === 'flex-end'}
                onChange={() => setAlignContent('flex-end')}
              />
              flex-end
            </label>
            <label>
              <input
                type="radio"
                name="alignContent"
                value={'center'}
                checked={alignContent === 'center'}
                onChange={() => setAlignContent('center')}
              />
              center
            </label>
            <label>
              <input
                type="radio"
                name="alignContent"
                value={'space-between'}
                checked={alignContent === 'space-between'}
                onChange={() => setAlignContent('space-between')}
              />
              space-between
            </label>
            <label>
              <input
                type="radio"
                name="alignContent"
                value={'space-around'}
                checked={alignContent === 'space-around'}
                onChange={() => setAlignContent('space-around')}
              />
              space-around
            </label>
            <label>
              <input
                type="radio"
                name="alignContent"
                value={'space-evenly'}
                checked={alignContent === 'space-evenly'}
                onChange={() => setAlignContent('space-evenly')}
              />
              space-evenly
            </label>
            <label>
              <input
                type="radio"
                name="alignContent"
                value={'stretch'}
                checked={alignContent === 'stretch'}
                onChange={() => setAlignContent('stretch')}
              />
              stretch
            </label>
          </div>

          <div>row-gap:</div>
          <div>
            <input
              type="number"
              min="0"
              max="1000"
              {...bindRowGapInput}
              style={{ width: '50px' }}
            />
            px
          </div>

          <div>column-gap:</div>
          <div>
            <input
              type="number"
              min="0"
              max="1000"
              {...bindColumnGapInput}
              style={{ width: '50px' }}
            />
            px
          </div>

          <div>padding:</div>
          <div>
            <input
              type="number"
              min="0"
              max="1000"
              {...bindPaddingParent}
              style={{ width: '50px' }}
            />
            px
          </div>

          <div>min-height:</div>
          <div>
            <input
              type="number"
              min="0"
              max="1000"
              {...bindHeightParent}
              style={{ width: '50px' }}
            />
            px
          </div>

          <div></div>
          <div></div>
        </div>
        <div>{'}'}</div>

        <br />

        <div>{'.child {'}</div>
        <div className="grid">
          <div>padding:</div>
          <div>
            <input
              type="number"
              min="0"
              max="1000"
              {...bindPaddingChild}
              style={{ width: '50px' }}
            />
            px
          </div>

          <div>margin:</div>
          <div>
            <input
              type="number"
              min="0"
              max="1000"
              {...bindMarginChild}
              style={{ width: '50px' }}
            />
            px
          </div>

          <div>min-width:</div>
          <div>
            <input
              type="number"
              min="0"
              max="1000"
              {...bindMinWidthChild}
              style={{ width: '50px' }}
            />
            px
          </div>
        </div>
        <div>{'}'}</div>

        <br />

        <div>{'.child:first-child {'}</div>
        <div className="grid">
          <div>order:</div>
          <div>
            <input
              type="number"
              min="0"
              max="1000"
              {...bindOrder}
              style={{ width: '50px' }}
            />
          </div>

          <div>flex-basis:</div>
          <div>
            <input type="text" {...bindFlexBasis} style={{ width: '100px' }} />
            <span style={{ marginLeft: '10px', fontSize: '12px' }}>
              can be length or 'auto'
            </span>
          </div>

          <div>flex-grow:</div>
          <div>
            <input {...bindFlexGrow} style={{ width: '50px' }} />
          </div>

          <div>flex-shrink:</div>
          <div>
            <input {...bindFlexShrink} style={{ width: '50px' }} />
          </div>

          <div>align-self:</div>
          <div>
            <label>
              <input
                type="radio"
                name="alignSelf"
                value={'auto'}
                checked={alignSelf === 'auto'}
                onChange={() => setAlignSelf('auto')}
              />
              auto
            </label>
            <label>
              <input
                type="radio"
                name="alignSelf"
                value={'stretch'}
                checked={alignSelf === 'stretch'}
                onChange={() => setAlignSelf('stretch')}
              />
              stretch
            </label>
            <label>
              <input
                type="radio"
                name="alignSelf"
                value={'flex-start'}
                checked={alignSelf === 'flex-start'}
                onChange={() => setAlignSelf('flex-start')}
              />
              flex-start
            </label>
            <label>
              <input
                type="radio"
                name="alignSelf"
                value={'flex-end'}
                checked={alignSelf === 'flex-end'}
                onChange={() => setAlignSelf('flex-end')}
              />
              flex-end
            </label>
            <label>
              <input
                type="radio"
                name="alignSelf"
                value={'center'}
                checked={alignSelf === 'center'}
                onChange={() => setAlignSelf('center')}
              />
              center
            </label>
            <label>
              <input
                type="radio"
                name="alignSelf"
                value={'baseline'}
                checked={alignSelf === 'baseline'}
                onChange={() => setAlignSelf('baseline')}
              />
              baseline
            </label>
          </div>
        </div>
        <div>{'}'}</div>
      </div>
    </Div>
  )
}

const Div = styled.div`
  font-size: 12px;

  .cssContainer {
    border: 1px solid #c7c7c7;
    border-radius: 6px;
    margin: 10px 0px;
    padding: 5px;
    white-space: nowrap;
    overflow: auto;
  }

  label {
    margin-right: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  input {
    margin-right: 5px;
  }

  .grid {
    display: grid;
    grid-template-columns: 100px auto;
    gap: 5px 10px;
    justify-self: end;

    & > *:nth-child(2n + 1) {
      justify-self: end;

      display: flex;
      align-items: center;
    }
    & > *:nth-child(2n) {
      color: grey;
      display: flex;
      align-items: center;
    }
  }
`

export const postObj = {
  title: 'display: flex',
  date: '2021.11.21',
  tags: ['CSS', 'property'],
  description: 'display: flex in CSS',
  body: (
    <>
      <p>Play with flex css properties.</p>
      <Cmpt />
    </>
  ),
}
