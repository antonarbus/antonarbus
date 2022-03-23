import { H3, Lnk } from '../../components/post/reExport';
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />;
}

export const postObj = {
  title: 'display & float property in CSS',
  date: '2022.02.11',
  tags: ['CSS', 'basics'],
  description: 'Display & float property in CSS',
  body: (
    <>
      <H3>display: inline</H3>
      <ul>
        <li>Inline elements are elements with <code>display: inline</code>, such as <code>{'<a>'}</code>, <code>{'<input>'}</code>, <code>{'<span>'}</code>, <code>{'<img>'}</code> and others</li>
        <li>Text is inline element</li>
        <li>Inline elements go on the same line one by one</li>
        <li>Inline elements jumps to the next line if there is no space anymore</li>
        <li>Width / height fits the content & can not be set</li>
        <li>Top & bottom margins can not be set</li>
        <li>Left & right margins can be set</li>
        <li>Padding can be set</li>
        <li>Line break in html between inline elements is considered as a space</li>
      </ul>
      <H3>display: block</H3>
      <ul>
        <li>Block elements go one under another (if there is no "float" property)</li>
        <li>Block tends to expand to the whole width</li>
        <li>Height / width can be set</li>
        <li>Block elements stick to each other w/o gaps (if there is no margin)</li>
        <li>Most of elements are block els by default</li>
        <li>Block element is a rectangle</li>
      </ul>
      <H3>display: inline-block</H3>
      <ul>
        <li>It is a block element with few exceptions</li>
        <li>Elements go on the same line one by one</li>
        <li>Width & height fits the content</li>
        <li>Width & height can be set</li>
        <li>Usually used to show block els in one line</li>
        <li>Line break in html (between tags for ex) considered as a space</li>
      </ul>
      <H3>display: table</H3>
      <ul>
        Can make a table from any element with following properties
        <li><code>{'display: table'}</code></li>
        <li><code>{'display: table-row'}</code></li>
        <li><code>{'display: table-header-group'}</code></li>
        <li><code>{'display: table-row-group'}</code></li>
        <li><code>{'display: table-footer-group'}</code></li>
        <li><code>{'display: table-column'}</code></li>
        <li><code>{'display: table-column-group'}</code></li>
        <li><code>{'display: table-cell'}</code></li>
        <li><code>{'display: table-caption'}</code></li>
      </ul>
      <H3>display: flex</H3>
      <ul>
        <li>Flex container expands or shrinks items to fill available free.</li>
        <li>Flex layout is direction-agnostic</li>
        <li>Check my <Lnk path="/post/display:-flex">playground</Lnk> for flex properties</li>
      </ul>
      <H3>display: list-item</H3>
      <p>Makes like a <code>{'<li>'}</code> bullet point list element.</p>
      <H3>display: run-in</H3>
      <p>Element becomes the first inline element of next block element</p>
      <H3>float: left</H3>
      <ul>
        <li><code>float: left | right | none | inherit</code></li>
        <li>With <code>float</code> property element is extracted from the normal css flow</li>
        <li>It is moved to left/right until touches the parent's edge or another <i>floating</i> element</li>
        <li>Float makes element automatically <code>display: block</code></li>
        <li>If there is no space to fit the element on a line, then it goes to the next line</li>
        <li>Other non-positioned block elements w/o <i>float</i> acts like floating element does not exist</li>
        <li>Inline elements know about floating element and go around it</li>
        <li>There is no vertical margin collapsing between floating and neighboring elements</li>
        <li>Float block can be a container and include other elements</li>
        <li>Widely used in text with images</li>
        <li>Parent does not reserve space for floating element, to fix it may add element after with <code>clear: left | right | both</code></li>
      </ul>
    </>
  ),
}