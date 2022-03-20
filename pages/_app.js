import Head from 'next/head'
import '/styles/globals.css'
import '/styles/prism.css'

export default function MyApp({ Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Anton Arbus blog</title>
        <meta name='description' content='Personal blog about programming where Anton Arbus tests different technologies' />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
