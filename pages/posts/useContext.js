import { Code, H3, CodeSpan } from '/components/post/reExport';
import { createContext, useContext } from "react"
import { OnePost } from '/components/post/OnePost'

const style = {border: "1px solid grey", padding: "10px", margin: "10px"}
const Context = createContext()

export default function index() {
  return <OnePost post={postObj} />;
}

function Component() {
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
function Age(props) {
  const context = useContext(Context)
  return (
    <div style={style}>
      Age is {context.age} 
    </div>
  )
}

export const postObj = {
  title: 'useContext',
  date: '2021.09.26',
  tags: ['react', 'basics'],
  description: 'useContext react hook',
  body: (
    <>

      <H3>Pass props vs useContext</H3>

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
      import { createContext, useContext } from "react"

      const style = {border: "1px solid grey", padding: "10px", margin: "10px"}
      const Context = createContext()

      function Component() {
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
      function Age(props) {
        const context = useContext(Context)
        return (
          <div style={style}>
            Age is {context.age} 
          </div>
        )
      }
      `}</Code>

      <Component />
    </>
  ),
}