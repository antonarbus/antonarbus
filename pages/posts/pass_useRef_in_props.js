import { Code, CodeSpan, H3, H5, LazyImg, Lnk, React, useEffect, useState, useRef } from '/components/post/reExport'
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />;
}

export const postObj = {
  title: 'pass useRef in props',
  date: '2022.03.28',
  tags: ['react', 'hook'],
  description: 'pass useRef in props',
  body: (
    <>
      <p><CodeSpan>useRef()</CodeSpan> can be passed in props, like any other variable</p>  
      <Code>{`
      function Parent() {
        const myRef = useRef()
        return (
          <>
            <Input myRef={myRef} type='password'/>
            <button onClick={() => myRef.current.focus()}>Focus</button>
          </>
        )
      }

      function Input(props) {
        return <input ref={props.myRef} placeholder='Custom input'/>
      }
      `}</Code>

      <Parent />
    </>
  ),
}

function Parent() {
  const myRef = useRef()
  return (
    <>
      <Input myRef={myRef} type='password'/>
      <button onClick={() => myRef.current.focus()}>Focus</button>
    </>
  )
}

function Input(props) {
  return <input ref={props.myRef} placeholder='Custom input'/>
}
