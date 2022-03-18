// pages/_app.js
import Navbar from '../components/Navbar'
import { SessionProvider } from "next-auth/react"; 
import '/styles/globals.css'
import '@st/layout.css'
import '../components/Navbar.css'

export default function MyApp({ Component, pageProps}) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
