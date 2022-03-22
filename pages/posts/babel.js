import { Code, H3, LazyImg, Lnk } from '../../components/post/reExport';
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />;
}

export const postObj = {
  title: 'Babel',
  date: '2021.12.08',
  tags: ['tools', 'JavaScript'],
  description: 'Babel tool ',
  body: (
    <>
      <p> <Lnk path="https://babeljs.io/">Babel</Lnk> is a code compiler, which can convert: </p>

      <ol>
        <li>new JavaScript into old versions</li>
        <li>TypeScript in JavaScript</li>
        <li>JSX into JavaScript</li>
        <li>minify file</li>
      </ol>

      <H3>Installation</H3>

      <p><Lnk path="https://babeljs.io/setup#installation">Install</Lnk> Babel via <code>npm install --save-dev @babel/core @babel/cli</code> </p>

      <p> Two dependencies are added into <code>package.json</code> </p>

      <Code lang="json">{`
      {
      "devDependencies": {
        "@babel/cli": "^7.0.0",
        "@babel/core": "^7.0.0"
      }
      `}</Code>

      <H3>Output</H3>
      

      <p> Add Babel build script into <code>package.json</code> </p>

      <Code lang="json">{`
      "scripts": {
        "babel": "babel src/components/PostsFeed/posts/babel/unbabeled -d src/components/PostsFeed/posts/babel/babeled"
      },
      `}</Code>

      <p> Babel will take files from <code>unbabeled</code> folder & put compiled ones into <code>babeled</code> folder. </p>

      <H3>Configuration</H3>
      
      <p> Create <Lnk path="https://babeljs.io/docs/en/config-files#file-relative-configuration"> local configuration </Lnk> file <code>.babelrc.json</code> or <Lnk path="https://babeljs.io/docs/en/config-files#project-wide-configuration"> root configuration </Lnk> <code>babel.config.json</code> </p>

      <p> Add <Lnk path="https://babeljs.io/docs/en/plugins-list">plugins</Lnk> / <Lnk path="https://babeljs.io/docs/en/presets">presets</Lnk> into configuration file. </p>

      <Code lang="json">{`
      // .babelrc.json
      {
        "presets": ["@babel/preset-env", "minify"],
        "plugins": [
          [ 
            "@babel/plugin-transform-template-literals", { "loose": true }
          ]
        ]
      }
      `}</Code>

      <p> For minification install additional preset with <code>npm install babel-preset-minify --save-dev</code> </p>

      <p> Execute <code>npm run babel</code> & modern JS is converted into ES5 + minified. </p>
      
      <H3>Unbabeled vs Babeled file</H3>

      <LazyImg src="/imgs/babel/babeledFile.png" />
    </>
  ),
}