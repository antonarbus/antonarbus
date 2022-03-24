import { Code, H3, CodeSpan } from '/components/post/reExport'
import { createContext, useContext, useState, useReducer } from "react"
import { OnePost } from '/components/post/OnePost'
import shortid from 'shortid'

export default function index() {
  return <OnePost post={postObj} />;
}

// #region useContext()

const style = {border: "1px solid grey", padding: "10px", margin: "10px"}
const Context = createContext()

function Parent1() {
  return (
    <Context.Provider value={{age: 37}}>
      <A name='John' />
      <Age />
    </Context.Provider>
    
  )
}
function A(props) {
  return (
    <div style={style}>
      A
      <B name={props.name}/>
    </div>
  )
}
function B(props) {
  return (
    <div style={style}>
      B
      <C name={props.name}/>
    </div>
  )
}
function C(props) {
  return (
    <div style={style}>
      C
      <D name={props.name}/>
    </div>
  )
}
function D(props) {
  const context = useContext(Context)
  return (
    <div style={style}>
      D
      <div> {props.name} is {context.age} </div>
    </div>
  )
}
function Age() {
  const context = useContext(Context)
  return (
    <div style={style}>
      Age is {context.age} 
    </div>
  )
}

// #endregion

// #region useContext() & state

const Context2 = createContext('');

function Parent2() {
  const [string, setString] = useState(shortid())

  const contextValue={
    string,
    setString,
    style: { border: '2px solid grey',  padding: '10px',  margin: '10px' }
  }

  return (
    <Context2.Provider value={contextValue}>
      <div style={contextValue.style}>
        <div>Parent</div>
        <div>String from context: <b>{contextValue.string}</b></div>
        <button onClick={() => contextValue.setString(shortid()) }>Change string</button>
        <Child2 name='Child 1'/>
        <Child2 name='Child 2'/>
      </div>
    </Context2.Provider>
  )
}

function Child2(props) {
  const contextValue = useContext(Context2);
  return (
    <div style={contextValue.style}>
      <div>{props.name}</div>
      <div>String from context: <b>{contextValue.string}</b></div>
      <button onClick={() => contextValue.setString(shortid()) }>Change string</button>
    </div>
  )
}

// #endregion

// #region same with useReducer()

const Context3 = createContext('');

function reducer(state, action) {
  if (action === 'randomize string') return shortid()
  return state
}

function Parent3() {
  const [string, dispatch] = useReducer(reducer, shortid())

  const contextValue={
    string,
    dispatch,
    style: { border: '2px solid grey',  padding: '10px',  margin: '10px' }
  }

  return (
    <Context3.Provider value={contextValue}>
      <div style={contextValue.style}>
        <div>Parent</div>
        <div>String from context: <b>{contextValue.string}</b></div>
        <button onClick={() => contextValue.dispatch('randomize string') }>Change string</button>
        <Child3 name='Child 1'/>
        <Child3 name='Child 2'/>
      </div>
    </Context3.Provider>
  )
}

function Child3(props) {
  const contextValue = useContext(Context3);
  return (
    <div style={contextValue.style}>
      <div>{props.name}</div>
      <div>String from context: <b>{contextValue.string}</b></div>
      <button onClick={() => contextValue.dispatch('randomize string') }>Change string</button>
    </div>
  )
}

// #endregion

export const postObj = {
  title: 'useContext',
  date: '2021.09.26',
  tags: ['react', 'basics'],
  description: 'useContext react hook',
  body: (
    <>
      <H3>Pass props vs <CodeSpan>useContext()</CodeSpan></H3>

      <ul>
        <li>In a project we may have many components and use one inside another ones</li>
        <li>Data should be passed between them, for example we want to...</li>
        <li>Pass <code>'John'</code> through all components tree from A to D in props</li>
        <li>We have to do it in all components and if we have many variables it may produce a mess in code</li>
        <li>Let's pass the age of John <code>37</code> the smarter way</li>
        <li>Create <code>Context</code> variable outside components with <CodeSpan>{'Context = createContext()'}</CodeSpan></li>
        <li>Wrap components in <CodeSpan>{'<Context.Provider value={{age: 37}}>'}</CodeSpan></li>
        <li>Passed value <code>{'{age: 37}'}</code> will be available in all components inside.</li>
        <li>Get the <code>age</code> from the context with hook <CodeSpan>{'useContext(Context).age'}</CodeSpan></li>
      </ul>

      <Code>{`
      import { createContext, useContext, useState, useReducer } from "react"
      import shortid from 'shortid'

      const style = {border: "1px solid grey", padding: "10px", margin: "10px"}
      const Context = createContext()

      function Parent1() {
        return (
          <Context.Provider value={{age: 37}}>
            <A name='John' />
            <Age />
          </Context.Provider>
          
        )
      }
      function A(props) {
        return (
          <div style={style}>
            A
            <B name={props.name}/>
          </div>
        )
      }
      function B(props) {
        return (
          <div style={style}>
            B
            <C name={props.name}/>
          </div>
        )
      }
      function C(props) {
        return (
          <div style={style}>
            C
            <D name={props.name}/>
          </div>
        )
      }
      function D(props) {
        const context = useContext(Context)
        return (
          <div style={style}>
            D
            <div> {props.name} is {context.age} </div>
          </div>
        )
      }
      function Age() {
        const context = useContext(Context)
        return (
          <div style={style}>
            Age is {context.age} 
          </div>
        )
      }
      `}</Code>

      <Parent1 />

      <H3>Pass state in <CodeSpan>useContext()</CodeSpan></H3>

      <p>Same idea as above, but pass a state variable into <CodeSpan>{'<Context.Provider value={state}>'}</CodeSpan>  </p>

      <Code>{`
        import { createContext, useContext, useState, useReducer } from "react"
        import shortid from 'shortid'

        const Context2 = createContext('');

        function Parent2() {
          const [string, setString] = useState(shortid())

          const contextValue={
            string,
            setString,
            style: { border: '2px solid grey',  padding: '10px',  margin: '10px' }
          }

          return (
            <Context2.Provider value={contextValue}>
              <div style={contextValue.style}>
                <div>Parent</div>
                <div>String from context: <b>{contextValue.string}</b></div>
                <button onClick={() => contextValue.setString(shortid()) }>Change string</button>
                <Child2 name='Child 1'/>
                <Child2 name='Child 2'/>
              </div>
            </Context2.Provider>
          )
        }

        function Child2(props) {
          const contextValue = useContext(Context2);
          return (
            <div style={contextValue.style}>
              <div>{props.name}</div>
              <div>String from context: <b>{contextValue.string}</b></div>
              <button onClick={() => contextValue.setString(shortid()) }>Change string</button>
            </div>
          )
        }
      `}</Code>

      <Parent2 />

      <H3><CodeSpan>useContext()</CodeSpan> with <CodeSpan>useReducer()</CodeSpan></H3>

      <p>Same as above, but instead of <CodeSpan>useState()</CodeSpan> hook <CodeSpan>useReducer()</CodeSpan> is used.</p>

      <Code>{`
        import { createContext, useContext, useState, useReducer } from "react"
        import shortid from 'shortid'

        const Context3 = createContext('');

        function reducer(state, action) {
          if (action === 'randomize string') return shortid()
          return state
        }

        function Parent3() {
          const [string, dispatch] = useReducer(reducer, shortid())

          const contextValue={
            string,
            dispatch,
            style: { border: '2px solid grey',  padding: '10px',  margin: '10px' }
          }

          return (
            <Context3.Provider value={contextValue}>
              <div style={contextValue.style}>
                <div>Parent</div>
                <div>String from context: <b>{contextValue.string}</b></div>
                <button onClick={() => contextValue.dispatch('randomize string') }>Change string</button>
                <Child3 name='Child 1'/>
                <Child3 name='Child 2'/>
              </div>
            </Context3.Provider>
          )
        }

        function Child3(props) {
          const contextValue = useContext(Context3);
          return (
            <div style={contextValue.style}>
              <div>{props.name}</div>
              <div>String from context: <b>{contextValue.string}</b></div>
              <button onClick={() => contextValue.dispatch('randomize string') }>Change string</button>
            </div>
          )
        }
      `}</Code>

      <Parent3 />
    </>
  ),
}