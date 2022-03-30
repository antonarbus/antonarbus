import { Code, CodeSpan, H3, H5, LazyImg, Lnk, React, useEffect, useState, useRef } from '/components/post/reExport'
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />;
}

function On_submit(props) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        alert('submitted')
      }}
    >
      <input type="text" placeholder='Press Enter' />
      <button>Go</button>
    </form>
  )
}

export const postObj = {
  title: 'form',
  date: '2022.03.29',
  tags: ['html'],
  description: 'form in html',
  body: (
    <>
      <p>To use enter to hit a 'submit' button we need to create a form and use from's "onSubmit" event handler.</p>

      <Code>{`
      <form
        onSubmit={e => {
          e.preventDefault()
          alert('submitted')
        }}
      >
        <input type="text" placeholder='Press Enter' />
        <button>Go</button>
      </form>
      `}</Code>

      <p>Either button click or enter key triggers the alert.</p>

      <On_submit />
    </>
  ),
}
