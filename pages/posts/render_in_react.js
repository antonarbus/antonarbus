import { Code, CodeSpan, H3, H5, LazyImg, Lnk, React, useEffect, useState, useRef, useCallback, useMemo } from '/components/post/reExport'
import { OnePost } from '/components/post/OnePost'
import blinkWithCssProp from '/functions/blinkWithCssProp';
import randomNumFromTo from '/functions/randomNumFromTo';

export default function index() {
  return <OnePost post={postObj} />;
}

const style = { border: '2px solid LightGrey', padding: '10px', margin: '10px', maxWidth: '500px' }

// #region parent & children render
function blink(el) {
  el.style.borderColor = 'red'
  setTimeout(() => { el.style.borderColor = 'LightGrey' }, 500)
}

function MyParent(props) {
  const ref = useRef()
  const [state, setState] = useState(0)
  const updateState = () => setState(state + 1)
  const [stateForChild, setStateForChild] = useState(0)
  const updateStateForChild = () => setStateForChild(stateForChild + 1)

  ref.current && blink(ref.current)
  return (
    <div style={style} ref={ref}>
      <h3>Parent</h3>
      <button onClick={updateState}>Add +1</button>
      <div>Value: <b>{state}</b></div>
      <ChildWithOwnState />
      <ChildWithoutStateInJSX />
      <ChildWithParentState state={stateForChild} updateState={updateStateForChild}/>
      {props.children}
    </div>
  )
}

function ChildWithOwnState() {
  const [state, setState] = useState(0)
  const updateState = () => setState(state + 1)
  const ref = useRef()

  ref.current && blink(ref.current)
  return (
    <div style={style} ref={ref}>
      <h3>Child with own state</h3>
      <div>Incrementor: <b>{state}</b></div>
      <button onClick={updateState}>Add +1</button>
    </div>
  )
}

function ChildWithoutStateInJSX() {
  const [state, setState] = useState(0)
  const updateState = () => setState(state + 1)
  const ref = useRef()

  ref.current && blink(ref.current)
  return (
    <div style={style} ref={ref}>
      <h3>Child with own state, but w/o state on screen</h3>
      <button onClick={updateState}>Add +1</button>
    </div>
  )
}

function ChildWithParentState(props) {
  const ref = useRef()

  ref.current && blink(ref.current)
  return (
    <div style={style} ref={ref}>
      <h3>Child with state from parent</h3>
      <div>Value: <b>{props.state}</b></div>
      <button onClick={props.updateState}>Add +1</button>
    </div>
  )
}

function ChildPassedInPropsChildren() {
  const [state, setState] = useState(0)
  const updateState = () => setState(state + 1)
  const ref = useRef()

  ref.current && blink(ref.current)
  return (
    <div style={style} ref={ref}>
      <h3><>Child - passed in <code>props.children</code></></h3>
      <div>Incrementor: <b>{state}</b></div>
      <button onClick={updateState}>Add +1</button>
    </div>
  )
}
// #endregion

// #region React.memo & useCallback
const externalObj = { name: 'John' }

function Parent() {
  const [state, setState] = useState(false)
  const ref = useRef()
  useEffect(() => { blinkWithCssProp({ el: ref.current }) })

  const num = 1
  const arr = [1, 2, 3]
  const obj = { name: 'John' }
  const func = () => alert('hi')
  const memoizedFunc = useCallback(func, [])
  const memoizedFuncWithDepArr = useCallback(func, [obj])

  return (
    <div style={style} ref={ref}>
      <div>Parent</div>
      <button onClick={() => setState(!state)}>Update state</button>&emsp;
      <span>State: <b>{state.toString()}</b></span>&emsp;
      <i>Blinking divs are re-rendered</i>
      <Child name={'Child'} />
      <MemoizedChild name={'React.memo(Child) with number in props'} arg={num} />
      <MemoizedChild name={'React.memo(Child) with external obj in props'} arg={externalObj} />
      <MemoizedChild name={'React.memo(Child) with object in props'} arg={obj} />
      <MemoizedChildWithCustomComparison name={'React.memo(Child, customComparisonFunc) with object in props'} arg={obj} />
      <MemoizedChild name={'React.memo(Child) with array in props'} arg={arr} />
      <MemoizedChild name={'React.memo(Child) with func in props'} arg={func} />
      <MemoizedChild name={'React.memo(Child) with useCallback(func, []) in props'} arg={memoizedFunc} />
      <MemoizedChild name={'React.memo(Child) with useCallback(func, [obj]) in props'} arg={memoizedFuncWithDepArr} />
    </div>
  )
}

function Child(props) {
  const ref = useRef()
  useEffect(() => { blinkWithCssProp({ el: ref.current }) })

  return (
    <div style={style} ref={ref}>
      {props.name}
    </div>
  )
}
const MemoizedChild = React.memo(Child)
const areNamesSame = (prevProps, nextProps) => prevProps.name === nextProps.name
const MemoizedChildWithCustomComparison = React.memo(Child, areNamesSame)
// #endregion

// #region useMemo
function Component() {
  const [state, setState] = useState(true)
  const toggleState = () => setState(!state)
  const oneOrTwo = randomNumFromTo(1, 2)

  return (
    <>
      <p>State: <b>{state.toString()}</b></p>
      <button onClick={toggleState}>Toggle state</button>
      <p><CodeSpan>{'randomNumFromTo(1, 1000)'}</CodeSpan>: <b>{randomNumFromTo(1, 1000)}</b></p>
      <p><CodeSpan>{'useMemo(() => randomNumFromTo(1, 1000), [])'}</CodeSpan>: <b>{useMemo(() => randomNumFromTo(1, 1000), [])}</b></p>
      <p>OneOrTwo = <b>{oneOrTwo}</b></p>
      <p><CodeSpan>{'useMemo(() => randomNumFromTo(1, 1000), [OneOrTwo])'}</CodeSpan>: <b>{useMemo(() => randomNumFromTo(1, 1000), [oneOrTwo])}</b></p>
    </>
  )
}
// #endregion

export const postObj = {
  title: 'render in react',
  date: '2021.09.25',
  tags: ['react', 'basics', 'hook'],
  description: 'When a component renders in React',
  body: (
    <>
      <H3>Render</H3>

      <ul>
        <p>A component render happens when:</p>
        <li>parent component renders</li>
        <li>state is changed</li>
      </ul>

      <p>Parent component render triggers all its direct child components render, but not passed within its tags in <code>props.children</code>.</p>

      <Code>{`
      const style = { border: '2px solid LightGrey', padding: '10px', margin: '10px', maxWidth: '500px' }

      function blink(el) {
        el.style.borderColor = 'red'
        setTimeout(() => { el.style.borderColor = 'LightGrey' }, 500)
      }

      function MyParent(props) {
        const ref = useRef()
        const [state, setState] = useState(0)
        const updateState = () => setState(state + 1)
        const [stateForChild, setStateForChild] = useState(0)
        const updateStateForChild = () => setStateForChild(stateForChild + 1)

        ref.current && blink(ref.current)
        return (
          <div style={style} ref={ref}>
            <h3>Parent</h3>
            <button onClick={updateState}>Add +1</button>
            <div>Value: <b>{state}</b></div>
            <ChildWithOwnState />
            <ChildWithoutStateInJSX />
            <ChildWithParentState state={stateForChild} updateState={updateStateForChild}/>
            {props.children}
          </div>
        )
      }

      function ChildWithOwnState() {
        const [state, setState] = useState(0)
        const updateState = () => setState(state + 1)
        const ref = useRef()

        ref.current && blink(ref.current)
        return (
          <div style={style} ref={ref}>
            <h3>Child with own state</h3>
            <div>Incrementor: <b>{state}</b></div>
            <button onClick={updateState}>Add +1</button>
          </div>
        )
      }

      function ChildWithoutStateInJSX() {
        const [state, setState] = useState(0)
        const updateState = () => setState(state + 1)
        const ref = useRef()

        ref.current && blink(ref.current)
        return (
          <div style={style} ref={ref}>
            <h3>Child with own state, but w/o state on screen</h3>
            <button onClick={updateState}>Add +1</button>
          </div>
        )
      }

      function ChildWithParentState(props) {
        const ref = useRef()

        ref.current && blink(ref.current)
        return (
          <div style={style} ref={ref}>
            <h3>Child with state from parent</h3>
            <div>Value: <b>{props.state}</b></div>
            <button onClick={props.updateState}>Add +1</button>
          </div>
        )
      }

      function ChildPassedInPropsChildren() {
        const [state, setState] = useState(0)
        const updateState = () => setState(state + 1)
        const ref = useRef()

        ref.current && blink(ref.current)
        return (
          <div style={style} ref={ref}>
            <h3><>Child - passed in <code>props.children</code></></h3>
            <div>Incrementor: <b>{state}</b></div>
            <button onClick={updateState}>Add +1</button>
          </div>
        )
      }

      <MyParent>
        <ChildPassedInPropsChildren/>
      </MyParent>
      `}</Code>

      <MyParent>
        <ChildPassedInPropsChildren/>
      </MyParent>

      <H3>Optimization</H3>

      <p>Ones parent component is rendered, Children components are also render, which may be undesirable. There are ways for optimization provided by React.</p>

      <H5><CodeSpan>React.memo()</CodeSpan></H5>

      <p>If a component has same props & renders the same result we can wrap it into <CodeSpan>React.memo()</CodeSpan> to skip a render.</p>
      <p>Note that React.memo() does a shallow comparison of props and objects of props.</p>
      <p>We can bring our own comparison function <CodeSpan>React.memo(Component, areEqual(prevProps, nextProps))</CodeSpan></p>
      <p><CodeSpan>React.memo()</CodeSpan> is a higher-order component, which means it takes a component and returns a new component.</p>
      
      <H5><CodeSpan>useCallback(func, [dep])</CodeSpan></H5>
      <p>Function created inside a component and passed in props is not equal to itself on next render, because they are objects and they reference to different variables.</p>
      <p>But if we wrap it into <CodeSpan>useCallback(func, [dep])</CodeSpan>, then it is memoized until any variable inside dependency array is changed, and <CodeSpan>React.memo()</CodeSpan> remember it and prevent re-renders.</p>

      <Code>{`
      const style = { border: '2px solid LightGray', padding: '5px', margin: '5px', maxWidth: '500px' }
      const externalObj = { name: 'John' }

      function Parent() {
        const [state, setState] = useState(false)
        const ref = useRef()
        useEffect(() => { blinkWithCssProp({ el: ref.current }) })

        const num = 1
        const arr = [1, 2, 3]
        const obj = { name: 'John' }
        const func = () => alert('hi')
        const memoizedFunc = useCallback(func, [])
        const memoizedFuncWithDepArr = useCallback(func, [obj])

        return (
          <div style={style} ref={ref}>
            <div>Parent</div>
            <button onClick={() => setState(!state)}>Update state</button>&emsp;
            <span>State: <b>{state.toString()}</b></span>&emsp;
            <i>Blinking divs are re-rendered</i>
            <Child name={'Child'} />
            <MemoizedChild name={'React.memo(Child) with number in props'} arg={num} />
            <MemoizedChild name={'React.memo(Child) with external obj in props'} arg={externalObj} />
            <MemoizedChild name={'React.memo(Child) with object in props'} arg={obj} />
            <MemoizedChildWithCustomComparison name={'React.memo(Child, customComparisonFunc) with object in props'} arg={obj} />
            <MemoizedChild name={'React.memo(Child) with array in props'} arg={arr} />
            <MemoizedChild name={'React.memo(Child) with func in props'} arg={func} />
            <MemoizedChild name={'React.memo(Child) with useCallback(func, []) in props'} arg={memoizedFunc} />
            <MemoizedChild name={'React.memo(Child) with useCallback(func, [obj]) in props'} arg={memoizedFuncWithDepArr} />
          </div>
        )
      }

      function Child(props) {
        const ref = useRef()
        useEffect(() => { blinkWithCssProp({ el: ref.current }) })

        return (
          <div style={style} ref={ref}>
            {props.name}
          </div>
        )
      }
      const MemoizedChild = React.memo(Child)
      const areNamesSame = (prevProps, nextProps) => prevProps.name === nextProps.name
      const MemoizedChildWithCustomComparison = React.memo(Child, areNamesSame)

      <Parent />
      `}</Code>

      <Parent />

      <H5><CodeSpan>useMemo()</CodeSpan></H5>

      <p>It is not about skipping a component render, but skipping a function execution.</p>
      <p>With <CodeSpan>const memoizedResult = useMemo(func, [dep])</CodeSpan> we may remember the result returned from a function and use it as long as variables in dependency array stays the same.</p>
      <p>Basically we can memoise a result of a heavy function, use it in the component and it will re-run the function only if some variable from the dep array changes.</p>
      <p>Look at the example, that memoised function's results are not recalculated with empty dependency array and sometimes recalculated if variable changes between 1 and 2</p>

      <Code>{`
      function Component() {
        const [state, setState] = useState(true)
        const toggleState = () => setState(!state)
        const oneOrTwo = randomNumFromTo(1, 2)

        return (
          <>
            <p>State: <b>{state.toString()}</b></p>
            <button onClick={toggleState}>Toggle state</button>
            <p><CodeSpan>{'randomNumFromTo(1, 1000)'}</CodeSpan>: <b>{randomNumFromTo(1, 1000)}</b></p>
            <p><CodeSpan>{'useMemo(() => randomNumFromTo(1, 1000), [])'}</CodeSpan>: <b>{useMemo(() => randomNumFromTo(1, 1000), [])}</b></p>
            <p>OneOrTwo = <b>{oneOrTwo}</b></p>
            <p><CodeSpan>{'useMemo(() => randomNumFromTo(1, 1000), [OneOrTwo])'}</CodeSpan>: <b>{useMemo(() => randomNumFromTo(1, 1000), [oneOrTwo])}</b></p>
          </>
        )
      }
      <Component />
      `}</Code>

      <Component />
    </>
  ),
}
