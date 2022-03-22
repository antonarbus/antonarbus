import Head from 'next/head'
import { Date } from './Date.js'
import { Tags } from './Tags.js'
import jsxToStr from '/functions/jsxToStr'
import Prism from 'prismjs'
import 'prismjs/components/prism-apacheconf'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import { useEffect } from 'react'

// Prism.plugins.NormalizeWhitespace.setDefaults({
//   'remove-trailing': true,
//   'remove-indent': true,
//   'left-trim': true,
//   'right-trim': true,
//   'break-lines': 600, // max number of characters in a line before break
//   indent: 0,
//   'remove-initial-line-feed': true,
// })


export function OnePost(props) {  

  useEffect(() => { Prism.highlightAll() }, [])

  return (
    <>
      <Head>
        <title>{jsxToStr(props.post.title)}</title>
        <meta name='description' content={props.post.description} />
      </Head>
      <article>
        <title>{props.post.title}</title>
        <section>
          {props.post.body}
          <Tags tags={props.post.tags} />
          <Date>{props.post.date}</Date>
        </section>
      </article>

      <style jsx global>{`
        article { 
          margin: 0 auto;
          margin-bottom: 20px;
          padding: 25px;
          max-width: 800px;
        }

        section {
          border-radius: 10px;
          font-size: 16px;
          padding: 20px;
          padding-bottom: 10px;
          background: white;
          position: relative;
          background-color: transparent;
          background-image: linear-gradient(to right bottom,rgb(255 255 255 / 90%),rgb(255 255 255 / 90%));
          box-shadow: #80808073 0px 0px 10px;
        }

        i {
          color: #9a6e3a;
        }

        ol, ul {
          padding-left: 15px;
          margin-top: 5px;
          margin-left: 5px;
        }

        li {
            padding-left: 10px;
            margin-bottom: 10px;
          }

        ul li::marker {
          content: '-';
          color: #c0bbbb;
          font-size: 20px;
        }

        mark {
          border-radius: 2px !important;
        }

        kbd {
          margin: 0px 0.1em;
          padding: 0.1em 0.6em;
          border-radius: 3px;
          border: 1px solid rgb(204, 204, 204);
          color: rgb(51, 51, 51);
          line-height: 1.4;
          font-family: Arial, Helvetica, sans-serif;
          display: inline-block;
          box-shadow: 0px 1px 0px rgba(0,0,0,0.2), inset 0px 0px 0px 2px #ffffff;
          background-color: rgb(247, 247, 247);
          text-shadow: 0 1px 0 #fff;
          font-size: 12px;
        }

        a {
          color: #0083bf;
          text-decoration: underline 0.09em transparent;
          transition: text-decoration-color 300ms;
        }

        a:hover {
          text-decoration-color: #0083bf;
        }

        p {
          margin: 20px 0px;
        }

        code:not([class*="language-"]) {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
          word-break: break-all;
          padding: 2px 4px;
          border-radius: 0.3em;
          white-space: normal;
          background: #e7e7e7;
          border-radius: 4px;
        }

        title {
          display: block;
          margin: 25px 0px;
          font-size: 24px;
          text-align: center;
          font-weight: 400;
        }
      `}</style>
    </>
  )
}
