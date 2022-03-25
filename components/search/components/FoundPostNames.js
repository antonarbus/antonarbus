import Link from "next/link";

export function FoundPostNames(props) {
  return (
    <>
      <Link href={'url1'}><a>{'post1'}</a></Link> 
      <Link href={'url2'}><a>{'post2'}</a></Link> 
      <Link href={'url3'}><a>{'post3'}</a></Link> 

      <style jsx>{`
        a {
          display: inline-block;
          position: relative;
          padding: 2px 5px ;
          margin-left: 5px;
          border: 1px solid #0083bf;
          border-radius: 3px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          color: grey;
          color: #0083bf;
          font-size: 12px;
          font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
          vertical-align: middle;
          user-select: none;
        }
      `}</style>
    </>
  )
}
