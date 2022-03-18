// pages/imgs.js
import Image from 'next/image'

export default function Imgs() {
  return (
    <>
      {['1', '2', '3', '4', '5'].map(path => {
        return (
          <div key={path}>
            <Image
              src={`/${path}.jpeg`}
              alt="some desc"
              width="100%" 
              height="100%" 
              // layout="fill"
              objectFit="contain"
              placeholder="blur"
              blurDataURL={`/${path}.jpeg`}
              quality='75'
            />
          </div>
        )
      })}
    </>
  )
}