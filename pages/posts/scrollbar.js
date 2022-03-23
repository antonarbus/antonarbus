import { styled, Code, CodeSpan, H3, H5, LazyImg, Lnk, React, useEffect, useState, useRef } from '/components/post/reExport'
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />;
}

export const postObj = {
  title: 'scrollbar',
  date: '2021.11.18',
  tags: ['CSS'],
  description: 'Scrollbar style',
  body: (
    <>
      <p> Custom scrollbar can be done with css. </p>
    
      <p> Here are the scrollbar styles of this page. </p>
      
      <Code lang='css'>{`
        html {
          /* puts scrollbar on top of content, prevents container moving left when scrollbar pops up */}
          overflow: overlay;

          &::-webkit-scrollbar {
            width: 5px;
            height: 5px;
          }
      
          &::-webkit-scrollbar-thumb {
            background: rgb(0 0 0 / 12%);
            border-radius: 5px;
            box-shadow: inset 0 0 6px rgb(0 0 0 / 10%);
      
            &:hover {
              background: rgb(0 0 0 / 20%);
            }
          }
      
          &::-webkit-scrollbar-track {
            background: rgb(0 0 0 / 5%);
          }
        }
      `}</Code>

    </>
  ),
}
