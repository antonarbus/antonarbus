import { styled, Code, CodeSpan, H3, H5, LazyImg, Lnk, React, useEffect, useState, useRef } from '/components/post/reExport'
import { createContext, useContext } from "react"
import { OnePost } from '/components/post/OnePost'

const style = {border: "1px solid grey", padding: "10px", margin: "10px"}
const Context = createContext()

export default function index() {
  return <OnePost post={postObj} />;
}

export const postObj = {
  title: 'useContext',
  date: '2021.09.26',
  tags: ['react', 'basics'],
  description: 'useContext react hook',
  body: (
    <>

      <H3>Pass props vs useContext</H3>

      <Code>{`
      function Component(props) {
        return (
          <Context.Provider value={{age: 37}}>
            <A name='Oleg' />
          </Context.Provider>
          
        )
      }

      function A(props) {
        return (
          <div style={style}>
            <B name={props.name}/>
          </div>
        )
      }
      function B(props) {
        return (
          <div style={style}>
            <C name={props.name}/>
          </div>
        )
      }
      function C(props) {
        return (
          <div style={style}>
            <D name={props.name}/>
          </div>
        )
      }
      function D(props) {
        const context = useContext(Context)
        return (
          <div style={style}>
            {props.name} is {context.age} 
          </div>
        )
      }
      `}</Code>

      <Component />
    </>
  ),
}

function Component(props) {
  return (
    <Context.Provider value={{age: 37}}>
      <A name='Oleg' />
    </Context.Provider>
    
  )
}

function A(props) {
  return (
    <div style={style}>
      <B name={props.name}/>
    </div>
  )
}
function B(props) {
  return (
    <div style={style}>
      <C name={props.name}/>
    </div>
  )
}
function C(props) {
  return (
    <div style={style}>
      <D name={props.name}/>
    </div>
  )
}
function D(props) {
  const context = useContext(Context)
  return (
    <div style={style}>
      {props.name} is {context.age} 
    </div>
  )
}
