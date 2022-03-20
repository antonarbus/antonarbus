import Head from 'next/head'
import '/styles/globals.css'
import '/styles/prism.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function MyApp({ Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Anton Arbus blog</title>
        <meta name='description' content='Personal blog about programming where Anton Arbus tests different technologies' />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
