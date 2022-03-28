import { Code, CodeSpan, H3, H5, LazyImg, Lnk, React, useEffect, useState, useRef } from '/components/post/reExport'
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />;
}

export const postObj = {
  title: 'xxx',
  date: 'zzz.01.01',
  tags: ['uuu', 'www'],
  description: 'yyy',
  body: (
    <>
      xyz  
    </>
  ),
}
