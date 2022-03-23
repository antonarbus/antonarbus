import { CodeSpan, Lnk, Code, H3, H5 } from '/components/post/reExport';
import { OnePost } from '/components/post/OnePost'

export default function index() {
  return <OnePost post={postObj} />
}

function GoogleLink1() {
  return (
    <a href="https://google.com" target="_blank" rel="noreferrer" >
      google.com

      <style jsx>{`
        a,
        a:hover, 
        a:active, 
        a:visited { 
          all: revert; 
        }
      `}</style>

    </a>
  )
}
function GoogleLink2() {
  return (
    <a href="https://google.com" target="_blank" rel="noreferrer" >
      google.com

      <style jsx>{`
        a,
        a:hover, 
        a:active, 
        a:visited { 
          all: revert; 
          text-decoration: none; 
        }
      `}</style>

    </a>
  )
}
function GoogleLink3() {
  return (
    <a href="https://google.com" target="_blank" rel="noreferrer" >
      google.com

      <style jsx>{`
        a {
          color: #0083bf;
          text-decoration-color: transparent;
          text-decoration-line: underline;
          text-decoration-style: solid;
          text-decoration-thickness: 0.09em;
        }
        a:hover {
          transition: text-decoration-color 300ms;
          text-decoration-color: #0495d7;
        }
      `}</style>

    </a>
  )
}
function GoogleLink4() {
  return (
    <a href="https://google.com" target="_blank" rel="noreferrer" >
      google.com

      <style jsx>{`
        a {
          color: #0083bf;
          text-decoration: none;
          position: relative;
          padding: 0.2em 0;
        }

        a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.05em;
          background-color: #0083bf;
          opacity: 0;
          transition: opacity 300ms, transform 300ms;
        }

        a:hover::after,
        a:focus::after {
          opacity: 1;
          transform: translateY(0.15em);
        }
      `}</style>

    </a>
  )
}
function GoogleLink5() {
  return (
    <a href="https://google.com" target="_blank" rel="noreferrer" >
      google.com

      <style jsx>{`
        a {
          color: #0083bf;
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
          vertical-align: bottom;
        }

        a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1.05em;
          background-color: #0083bf;
          transform: translateX(-100%) translateY(1em);
        }

        a:hover::after,
        a:focus::after {
          transform: translateX(0%) translateY(1em);
          transition: transform 300ms;
        }
      `}</style>

    </a>
  )
}
function GoogleLink6() {
  return (
    <a href="https://google.com" target="_blank" rel="noreferrer" >
      google.com

      <style jsx>{`
        a {
          color: #0083bf;
          text-decoration: none;
          display: inline-block;
          position: relative;
        }

        a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.05em;
          background-color: #0083bf;
        }

        a::after {
          transform: scale(0);
          transform-origin: center;
        }

        a:hover::after,
        a:focus::after {
          transform: scale(1);
          transition: transform 300ms;
        }
      `}</style>

    </a>
  )
}

export const postObj = {
  title: 'link style',
  date: '2021.11.04',
  tags: ['CSS'],
  description: 'Link style',
  body: <div>
    <p>Post is inspired by <Lnk path="https://michellebarker.co.uk/"> Michelle Barker's </Lnk> great <Lnk path="https://css-irl.info/animating-underlines/">article</Lnk>. </p>

    <H3>Reset styles</H3>
    
    <p>Let's reset all styles to the user agent default ones and see how link looks like. </p>

    <Code lang='css'>{`
    a,
    a:hover, 
    a:active, 
    a:visited { 
      all: revert; 
    }
    `}</Code>

    <GoogleLink1 />

    <H3>Remove underline</H3>

    <p>To remove the line below the link change property from <CodeSpan>{'{text-decoration: underline}'}</CodeSpan> to <CodeSpan>{'{text-decoration: none}'}</CodeSpan></p>

    <Code lang='css'>{`
    a,
    a:hover, 
    a:active, 
    a:visited { 
      all: revert; 
      text-decoration: none; 
    }
    `}</Code>

    <GoogleLink2 />

    <H3>Simple & nice</H3>

    <p>Simple styles can be applied for an anchor tag to make it look nicer. </p>

    <Code lang='css'>{`
    a {
      color: #0083bf;
      text-decoration-color: transparent;
      text-decoration-line: underline;
      text-decoration-style: solid;
      text-decoration-thickness: 0.09em;
    }
    a:hover {
      transition: text-decoration-color 300ms;
      text-decoration-color: #0495d7;
    }
    `}</Code>

    <GoogleLink3 />

    <H3>With animation</H3>

    <H5>Underline from the top</H5>

    <p>We can also imitate underline by pseudo class.</p>

    <Code lang='css'>{`
      a {
        color: #0083bf;
        text-decoration: none;
        position: relative;
        padding: 0.2em 0;
      }

      a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.05em;
        background-color: #0083bf;
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
      }

      a:hover::after,
      a:focus::after {
        opacity: 1;
        transform: translateY(0.15em);
      }
    `}</Code>

    <GoogleLink4 />

    <H5>Underline from the left</H5>

    <Code lang='css'>{`
      a {
        color: #0083bf;
        text-decoration: none;
        display: inline-block;
        position: relative;
        overflow: hidden;
        vertical-align: bottom;
      }

      a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1.05em;
        background-color: #0083bf;
        transform: translateX(-100%) translateY(1em);
      }

      a:hover::after,
      a:focus::after {
        transform: translateX(0%) translateY(1em);
        transition: transform 300ms;
      }
    `}</Code>
    
    <GoogleLink5 />

    <H5>Underline from the center</H5>

    <Code lang='css'>{`
      a {
        color: #0083bf;
        text-decoration: none;
        display: inline-block;
        position: relative;
      }

      a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.05em;
        background-color: #0083bf;
      }

      a::after {
        transform: scale(0);
        transform-origin: center;
      }

      a:hover::after,
      a:focus::after {
        transform: scale(1);
        transition: transform 300ms;
      }
    `}</Code>
    
    <GoogleLink6 />
  </div>
}
