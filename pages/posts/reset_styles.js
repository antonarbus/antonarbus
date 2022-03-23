import { styled, Code, CodeSpan, H3, H5, LazyImg, Lnk, React, useEffect, useState, useRef } from '/components/post/reExport'
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />;
}

export const postObj = {
  title: 'reset styles',
  date: '2021.11.03',
  tags: ['CSS'],
  description: 'Reset CSS property',
  body: (
    <>
      <H3>original</H3>
      <Code lang='css'>{`
      .outer {
        background: grey;
        padding: 10px;
      }
      .inner {
        background: beige;
        padding: 10px;
        border: 1px solid red;
      }
      `}</Code>

      <div className='outer'>
        <div className='inner'></div>

        <style jsx>{`
          .outer {
            background: grey;
            padding: 10px;
          }
          .inner {
            background: beige;
            padding: 10px;
            border: 1px solid red;
          }
        `}</style>
      </div>
      
      <H3>inherit</H3>
      <Code lang='css'>{`
      .outer {
        background: grey;
        padding: 10px;
      }
      .inner {
        background: inherit;
        padding: 10px;
        border: 1px solid red;
      }
      `}</Code>
      <div className='outer'>
        <div className='inner'>
        </div>

        <style jsx>{`
          .outer {
            background: grey;
            padding: 10px;
          }
          .inner {
            background: inherit;
            padding: 10px;
            border: 1px solid red;
          }
        `}</style>
      </div>

      <H3>original</H3>
      <div>We have <i>inline</i> styles & local <i>body</i> styles for an anchor tag.</div>
      <Code lang='css'>{`
        a {
          color: red;
          font-size: 30px
        }
      `}</Code>
      
      <a href="https://google.com" target="_blank" rel="noreferrer">
        Google
        <style jsx>{`
          a {
            color: red;
            font-size: 30px
          }
        `}</style>
      </a>

      <H3>color: revert</H3>
      <p>Set color property to the user agent stylesheet.</p>
      <Code lang='css'>{`
          a {
            color: green;
            font-size: 30px;
            color: revert;
          }
      `}</Code>
      <a href="https://google.com" target="_blank" rel="noreferrer" >
        Google
        <style jsx>{`
          a {
            color: green;
            font-size: 30px;
            color: revert;
          }
        `}</style>
      </a>

      <H3>all: revert</H3>
      <p>Set all CSS properties to the user agent stylesheet.</p>
      <Code lang='css'>{`
            color: green;
            font-size: 30px;
            all: revert;
      `}</Code>
      <a href="https://google.com" target="_blank" rel="noreferrer" >
        Google

        <style jsx>{`
          a {
            color: green;
            font-size: 30px;
            all: revert;
          }
        `}</style>
      </a>

      <H3>color: initial</H3>
      <p>Sets property back to the spec default.</p>
      <Code lang='css'>{`
      color: green;
      font-size: 30px;
      all: initial;
      `}</Code>
      <a href="https://google.com" target="_blank" rel="noreferrer" >
        Google

        <style jsx>{`
          a {
            color: green;
            font-size: 30px;
            all: initial;
          }
        `}</style>
      </a>

      <H3>color: unset</H3>
      <p>Inherit from parent if possible or sets property back to the spec default.</p>
      <Code lang='css'>{`
            color: green;
            font-size: 30px;
            all: unset;
      `}</Code>
      <a href="https://google.com" target="_blank" rel="noreferrer" >
        Google

        <style jsx>{`
          a {
            color: green;
            font-size: 30px;
            all: unset;
          }
        `}</style>
      </a>
    </>
  ),
}
