import { Code, CodeSpan, H3, H5, LazyImg, Lnk, React, useEffect, useState, useRef } from '/components/post/reExport'
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />;
}

// #region Without state
const btnCss = { padding: '5px 20px', margin: '10px 10px 0px 0px', cursor: 'pointer' }

function ComponentWithoutState() {
  let likes = 0
  return (
    <>
      <div>Likes <b>{likes}</b></div>
      <button onClick={() => likes++} style={btnCss}>+1</button>
      <button onClick={() => likes--} style={btnCss}>-1</button>
      <button onClick={() => alert(likes)} style={btnCss}>Alert <b>likes</b></button>
    </>
  )
}
// #endregion

// #region With state
function ComponentWithState() {
  const [likes, setLikes] = React.useState(0)
  return (
    <>
      <div>Likes <b>{likes}</b></div>
      <button onClick={() => setLikes(likes + 1)} style={btnCss}>+1</button>
      <button onClick={() => setLikes(likes - 1)} style={btnCss}>-1</button>
      <button onClick={() => alert(likes)} style={btnCss}>Alert <b>likes</b></button>
    </>
  )
}
// #endregion

// #region state mutation
function StateMutation() {
  const [state, setState] = React.useState([1, 2, 3])
  const mutateState = () => {
    state.push(state.at(-1) + 1)
    setState(state)
  }
  const alertState = () => alert(JSON.stringify(state))

  return (
    <>
      <div>State value: <b>{JSON.stringify(state)}</b></div>
      <button onClick={mutateState}>Add value to array by mutation</button>&emsp;
      <button onClick={alertState}>Alert state</button>
    </>
  )
}
// #endregion

// #region state update
function StateUpdate() {
  const [state, setState] = React.useState([1, 2, 3])
  const updateState = () => setState([...state, state.at(-1) + 1])
  const alertState = () => alert(JSON.stringify(state))

  return (
    <>
      <div>State value: <b>{JSON.stringify(state)}</b></div>
      <button onClick={updateState}>Add value to array by update</button>&emsp;
      <button onClick={alertState}>Alert state</button>
    </>
  )
}
// #endregion

// #region state update with same value
function UpdateStateSameAndDifferentValue() {
  const [state, setState] = useState(0)
  const updateStateToSameValue = () => setState(state)
  const updateStateToNewValue = () => setState(state + 1)
  return (
    <>
      <div>Value: <b>{state}</b></div>
      <button onClick={updateStateToSameValue}>Update state to same value</button>&emsp;
      <button onClick={updateStateToNewValue}>Update state to new value</button>
    </>
  )
}
// #endregion

// #region update state of parent component from child
const style = { border: '2px solid LightGrey', padding: '10px', margin: '10px', maxWidth: '500px' }

function ParentWithState() {
  const [state, setState] = React.useState(0)
  const updateState = () => setState(state + 1)
  return (
    <div style={style}>
      <h1>Parent Component</h1>
      <div>Count state variable: <b>{state}</b></div>
      <button onClick={updateState}>Update state from parent component</button>
      <Child state={state} setState={setState} />
    </div>
  )
}
function Child(props) {
  const { state, setState } = props
  const updateState = () => setState(state + 1)
  return (
    <div style={style}>
      <h1>Child Component</h1>
      <button onClick={updateState}>Update state from child component</button>
    </div>
  )
}
// #endregion

// #region set state with previous value
function SetStateWithPreviousValue() {
  const [state, setState] = useState(0)
  const addOne5TimesAsync = () => {
    for (let i = 0; i < 5; i++) setState(state + 1)
  }
  const addOne5TimesSync = () => {
    for (let i = 0; i < 5; i++) setState(prevVal => prevVal + 1)
  }
  return (
    <>
      <h3>{state}</h3>
      <button onClick={addOne5TimesAsync}>Async increment 5 times</button>&emsp;
      <button onClick={addOne5TimesSync}>Sync increment 5 times</button>
    </>
  )
}
// #endregion

export const postObj = {
  title: 'useState',
  date: '2021.09.25',
  tags: ['react', 'basics', 'hook'],
  description: 'useState hook in React',
  body: (
    <>
      <p>State variable change forces the whole component to render.</p>

      <H3>Without <CodeSpan>useState()</CodeSpan></H3>  

      <p> We can see likes value change in alert, but not on the screen, because a function component runs and show updates only if its <i>state</i> variable is updated. </p>

      <Code>{`
      function ComponentWithoutState() {
        let likes = 0
        return (
          <>
            <div>Likes <b>{likes}</b></div>
            <button onClick={() => likes++} style={btnCss}>+1</button>
            <button onClick={() => likes--} style={btnCss}>-1</button>
            <button onClick={() => alert(likes)} style={btnCss}>Alert <b>likes</b></button>
          </>
        )
      }
      `}</Code>

      <ComponentWithoutState />

      <H3>With <CodeSpan>useState()</CodeSpan></H3>

      <Code>{`
      import React from 'react'

      function ComponentWithState() {
        const [likes, setLikes] = React.useState(0)
        return (
          <>
            <div>Likes <b>{likes}</b></div>
            <button onClick={() => setLikes(likes + 1)} style={btnCss}>+1</button>
            <button onClick={() => setLikes(likes - 1)} style={btnCss}>-1</button>
            <button onClick={() => alert(likes)} style={btnCss}>Alert <b>likes</b></button>
          </>
        )
      }
      `}</Code>

      <ComponentWithState />

      <H5>State init</H5>

      <ul>
        <li>Initialize <CodeSpan>likes</CodeSpan> state by <CodeSpan>const [likes, setLikes] = React.useState(0)</CodeSpan></li>
        <li><CodeSpan>setLikes</CodeSpan> is a function to change a state value</li>
        <li>Pass a new state value as an argument <CodeSpan>setLikes(likes + 1)</CodeSpan></li>
        <li>Initial state <CodeSpan>0</CodeSpan> is passed as an argument in <CodeSpan>useState(0)</CodeSpan></li>
      </ul>

      <H3>State is immutable</H3>

      <ul>
        <li>If we update a state, we need to provide a new value, otherwise React doesn't trigger a render.</li>
        <li>Just provide a new primitive value or new reference for an object.</li>
      </ul>

      <H5>State object mutation</H5>

      <ul>
        <li>State update does not trigger a render</li>
        <li>Even if the state is really updated, which is visible in alert</li>
      </ul>

      <Code>{`
      import React from 'react'

      function StateMutation() {
        const [state, setState] = React.useState([1, 2, 3])
        const mutateState = () => {
          state.push(state.at(-1) + 1)
          setState(state)
        }
        const alertState = () => alert(JSON.stringify(state))

        return (
          <>
            <div>State value: <b>{JSON.stringify(state)}</b></div>
            <button onClick={mutateState}>Add value to array by mutation</button>&emsp;
            <button onClick={alertState}>Alert state</button>
          </>
        )
      }
      `}</Code>

      <StateMutation />

      <H5>New state object</H5>

      <p>To let render happen we need to provide new state.</p>

      <Code>{`
      function StateUpdate() {
        const [state, setState] = React.useState([1, 2, 3])
        const updateState = () => setState([...state, state.at(-1) + 1])
        const alertState = () => alert(JSON.stringify(state))

        return (
          <>
            <div>State value: <b>{JSON.stringify(state)}</b></div>
            <button onClick={updateState}>Add value to array by update</button>&emsp;
            <button onClick={alertState}>Alert state</button>
          </>
        )
      }
      `}</Code>

      <StateUpdate />

      <H3>State update with same value</H3>

      <p>If a state is set to the same value via <CodeSpan>setState(sameVal)</CodeSpan> render does not happen</p>

      <Code>{`
      function UpdateStateSameAndDifferentValue() {
        const [state, setState] = useState(0)
        const updateStateToSameValue = () => setState(state)
        const updateStateToNewValue = () => setState(state + 1)
        return (
          <>
            <div>Value: <b>{state}</b></div>
            <button onClick={updateStateToSameValue}>Update state to same value</button>&emsp;
            <button onClick={updateStateToNewValue}>Update state to new value</button>
          </>
        )
      }
      `}</Code>

      <UpdateStateSameAndDifferentValue />

      <H3>Update state from a child component</H3>

      <p> To update a parent component's state from a child component, the update function <CodeSpan>setState</CodeSpan> should be passed via props to a child component. </p>

      <Code>{`
      const style = { border: '2px solid grey', padding: '10px', margin: '10px', maxWidth: '500px' }

      function ParentWithState() {
        const [state, setState] = React.useState(0)
        const updateState = () => setState(state + 1)
        return (
          <div style={style}>
            <h1>Parent Component</h1>
            <div>Count state variable: <b>{state}</b></div>
            <button onClick={updateState}>Update state from parent component</button>
            <Child state={state} setState={setState} />
          </div>
        )
      }
      function Child(props) {
        const { state, setState } = props
        const updateState = () => setState(state + 1)
        return (
          <div style={style}>
            <h1>Child Component</h1>
            <button onClick={updateState}>Update state from child component</button>
          </div>
        )
      }
      `}</Code>

      <ParentWithState />

      <H3>State previous value</H3>

      <p>When we update a state with <CodeSpan>setState(newValue)</CodeSpan> function, it is done asynchronously sometime in the future and we can not rely on updated state value in calculations.</p>
      
      <H5>Async nature of <CodeSpan>setState()</CodeSpan></H5>
      
      <p>For example we increment the state 5 times with <CodeSpan>{'for (let i = 0; i < 5; i++) setState(state + 1)'}</CodeSpan> </p>
      <p>5 calls go into the end of <i>microtask queue</i> remembering current state value <code>currentValue = 0</code>. When they are executed in future they all will return <code>0</code></p>

      <H5><CodeSpan>setState(prevVal => prevVal + 1)</CodeSpan> </H5>

      <p>There is the second version of <code>setState()</code> function with callback, which provides access to the current state value at the moment of function execution.</p>

      <Code>{`
      function SetStateWithPreviousValue() {
        const [state, setState] = useState(0)
        const addOne5TimesAsync = () => {
          for (let i = 0; i < 5; i++) setState(state + 1)
        }
        const addOne5TimesSync = () => {
          for (let i = 0; i < 5; i++) setState(prevVal => prevVal + 1)
        }
        return (
          <>
            <h3>{state}</h3>
            <button onClick={addOne5TimesAsync}>Async increment 5 times</button>&emsp;
            <button onClick={addOne5TimesSync}>Sync increment 5 times</button>
          </>
        )
      }
      `}</Code>

      <SetStateWithPreviousValue />
    </>
  ),
}
